import { ChangeEvent, CompositionEvent, useState } from 'react'
import { useAppDispath } from '@/redux/rootStore'
import { setCenterAddress } from '@/redux/stores/'

export const useModalSearchMap = (mapRef: google.maps.Map) => {
  // 検索候補を表示するCSSを上書きするのが難しいので，その部分だけライブラリを使わずに実装する
  const autoCompleteService = new google.maps.places.AutocompleteService()
  const places = new google.maps.places.PlacesService(mapRef)

  const dispatch = useAppDispath()
  const [predictions, setPredictions] = useState<
    google.maps.places.AutocompletePrediction[] | null
  >(null)
  const [isTyping, setIsTyping] = useState(false)

  // place情報から使うやつだけ抜き出す
  const getPlaceDetails = (place: google.maps.places.PlaceResult | null) => {
    if (place) {
      return {
        name: place.name || '',
        address: place.formatted_address || '',
        location: {
          lat: place.geometry?.location?.lat() || 0,
          lng: place.geometry?.location?.lng() || 0
        }
      }
    }
    return null
  }

  // 検索候補を取得する
  const getPredictions = async (inputValue: string) => {
    autoCompleteService.getPlacePredictions(
      { input: inputValue },
      (predictions, status) => {
        if (status === 'OK') {
          setPredictions(predictions)
        }
      }
    )
  }

  // リクエストを減らすため，変換中はリクエストしない
  const onCompositionStartHandler = () => {
    setIsTyping(true)
  }
  const onCompositionEndHandler = async (
    e: CompositionEvent<HTMLInputElement>
  ) => {
    setIsTyping(false)
    await getPredictions((e.target as HTMLInputElement).value)
  }
  const onChangeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    if (isTyping) return
    await getPredictions(e.target.value)
  }

  // placeidから場所を求めてglobal stateに入れる
  const onClickHandler = async (
    data: google.maps.places.AutocompletePrediction
  ) => {
    places.getDetails({ placeId: data.place_id }, (prediction, status) => {
      if (status === 'OK') {
        dispatch(setCenterAddress(getPlaceDetails(prediction)))
      }
    })
    setPredictions(null)
  }

  return {
    predictions,
    onCompositionStartHandler,
    onCompositionEndHandler,
    onChangeHandler,
    onClickHandler
  }
}
