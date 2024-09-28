import { colors } from "../utilities/colors"
import { appStyles } from "../utilities/appStyles"
import { ChangePassword, Gudlines, Policy, Sreach, YourPreference } from "../../screens/app"
import { fileMapCacheDirectory } from "../../../metro.config"
import common from "../../navigation/common"


export const baseURL = 'https://localserver/v1/'
export const endPoints = {
    register:{
        url_1:'register'
    },
    login:{
        url_1:'login'
    }
}
export const routes = {
    weeklyplan:'weeklyplan',
    avaliablity:'avaliablity',
    localhome:'localhome',
    localmap:'localmap',
    mappin:'mappin',
    nextComplete :'nextComplete',
    localcomplete:'localcomplete',
    localProfile:'localprofile',
    localCreate:'localCreate',
    localAuth:'localAuth',
    localsignin:'localsignin',
    paymentmethod:'paymentmethod',
    changepassword:'changepassword',
    editprfile:'editprfile',
    common:'common',
    sort:'sort',
    matchResult:'matchResult',
    //main stacks
    yourPreference:'yourPreference',
    addcard:'addcard',
    pay:'pay',
    conform:'conform',
    conformbook:'conformbook',
    viewprofile:'viewprofile',
    schedule:'schedule',
    trip:'trip',
    filter:'filter',
    sreach:'sreach',
    faq:'faq',
    onbording:'onbording',
    contactsupport:'contactsupport',
    gudlines:'gudlines',
    term:'term',
    help:'help',
    policy:'policy',
    auth: 'auth',
    add:'add',
    app: 'app',
    forget:'forget',
    common: 'common',
    chat:'chat',
    creat:'creat',
    //auth
    splash: 'splash',
    signin: 'signin',
    createAccount: 'createAccount',
   aboutus:'aboutus',

    //app
    bottomTab: 'bottomTab',
    home: 'home',
    account: 'account',
    info:'info',
    shop: 'shop',
    term:'term',
    community: 'community',
    postDetail: 'postDetail',
   
    smartFoodJournal: 'smartFoodJournal',
    sprayLogs: 'sprayLogs',
    userProfile: 'userProfile',
    weightLossRanking: 'weightLossRanking',

   

    //common
    termsOfService: 'termsOfService',
    privacyPolicy: 'privacyPolicy',
}
export const headers = {
    screenOptions: {
        // headerShown: false,
        title: 'Title',
        headerTitleAlign: 'left',
        headerStyle: [appStyles.headerStyle],
        headerTitleStyle: appStyles.headerTitleStyle,
        headerTintColor: colors.appTextColor4,
        headerBackTitle: ' '

    }
}
export const tabs = {
    tabBarOptions: {
        showLabel: false,
        tabBarActiveTintColor: colors.appBgColor1,
        tabBarInactiveTintColor: colors.appBgColor1 + '60',
        allowFontScaling: true,
        tabBarStyle: [appStyles.tabBarStyle, appStyles.shadowExtraDark],
        activeBackgroundColor: '#FFFFFF40',
        //tabStyle: { borderRadius: 20, marginHorizontal: 7.5, marginVertical: 2 }
    },
}

export const imagePickerOptions = {
    title: 'Select Photo',
    quality: 1,
    maxWidth: 500,
    maxHeight: 500,
    // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};