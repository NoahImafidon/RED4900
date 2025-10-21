import { StyleSheet, Text, View } from 'react-native'
import ScreenWrapper from '../components/ScreenWrapper'
import { hp, wp } from '../components/helpers/common'
import { theme } from '../constants/theme'

const Login = () => {
  return (
    <ScreenWrapper>
      <Text>Login</Text>
      {/* WelcomeBack */}
      <View>
        <Text style={styles.welcomeText}>Welcome Back</Text>

      </View>
      {/* LoginInfo */}
<View style={styles.form}>
<Text style={{fontSize: hp(1.5), color: theme.colors.text}}>

</Text>
</View>

    </ScreenWrapper>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex: 1,
alignItems:'center',
justifyContent:'space-around',
backgroundColor: 'white',
paddingHorizontal: wp(4)
    },
    welcomeImage: {
        height: hp(30),
        width: wp(100),
        alignSelf: 'center',
    },
    title: {
color: theme.colors.text,
fontSize:hp(4),
textAlign:'center',
fontWeight:theme.fonts.extraBold
    },
    slogan: {
        textAlign: 'center',
        paddingHorizontal: wp(10),
        fontSize: hp(1.7),
        color: theme.colors.text, 
    },
    footer: {
gap: 30,
width: '100%'
    },
    bottomTextContainer:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
    },
    loginText: {
        textAlign: 'center',
        color: theme.colors.text,
        fontSize: hp(1.6)
    },
    welcomeText: {
        fontWeight: theme.fonts.extraBold,
        color: theme.colors.text,
        fontSize: hp(4)
    },
   form: {
        gap: 25
    }
})