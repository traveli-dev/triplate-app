import { Header } from '@/components/Headers'
import { TabDashboard } from '@/components/Tabs'

const Index = () => {
  return (
    <>
      <Header href="/settings" title="たびのテンプレートを管理" />
      <TabDashboard />
    </>
  )
}

export default Index
