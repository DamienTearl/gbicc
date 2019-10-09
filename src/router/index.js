import Vue from 'vue'
import Router from 'vue-router'
import dataApplication from '@/components/dataApplication'
import dataAssets from '@/components/dataAssets'
import metaData from '@/components/metaData'
import dataQuality from '@/components/dataQuality'
import dataStandard from '@/components/dataStandard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dataApplication',
      component: dataApplication
    },
    {
      path: '/dataAssets',
      name: 'dataAssets',
      component: dataAssets
    },
    {
      path: '/metaData',
      name: 'metaData',
      component: metaData
    },
    {
      path: '/dataQuality',
      name: 'dataQuality',
      component: dataQuality
    },
    {
      path: '/dataStandard',
      name: 'dataStandard',
      component: dataStandard
    }
  ]
})
