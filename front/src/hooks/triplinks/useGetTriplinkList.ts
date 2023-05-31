import {useAppSelector} from "@/redux/rootStore";
import {authSelectors} from "@/redux/stores";
import {useEffect, useState} from "react";
import {TriplinkType, useGetMyTriplinksByUserQuery} from "@/redux/services/firestore/triplinks/triplinks";


export const useGetTriplinkList = () => {
  const currentUserUid = useAppSelector(authSelectors.currentUserUid)
  const [triplinkList, settriplinkList] = useState<TriplinkType[]>()
  const { data, isLoading } = useGetMyTriplinksByUserQuery()

  useEffect(() => {
    settriplinkList(data)
  })

  return { triplinkList, isLoading }
}