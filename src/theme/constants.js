import {Dimensions} from 'react-native';

export default Constants = {
  flex:{
    full: 1
  },
  container:{
    padding: 20,
  },
  flexDirection:{
    row: 'row',
    column: 'column'
  },
  justify:{
    flexStart: 'flex-start',
    center: 'center',
    flexEnd: 'flex-end',
    spaceBetween: 'space-between'
  },
  align:{
    flexStart: 'flex-start',
    center: 'center',
    flexEnd: 'flex-end'
  },
  elevation:{
    below: -999,
    normal: 0,
    above: 999
  },
  border:{
    radius: 5
  },
  colors:{
    background: '#fff',
    primary: '#fff',
    secondary: '#fff',
  },
  shadow:{
    color:'#000',
    offset:{
      width: 10,
      height:10
    },
    opacity: 0.25,
    radius: 3.84,
    elevation: 5,
  },
  textColor:{
    default: '#000',
    active: '#000',
    selected: '#000',
    inactive: '#000',
    disabled: '#000'
  },
  fontSize:{
    heading1: 60,
    heading2: 30,
    heading3: 15,
    xl: 16,
    lg: 14,
    md: 12,
    sm: 10
  },
  icon:{
    size: 28,
    color:'#000'
  },
  fontWeight:{
    bold: 'bold',
    normal: 'normal'
  },
  padding:{
   sm: 10,
   md: 30,
   lg: 50,
   xl: 70
  },
  margin:{
    top: 10,
    left:10,
    right:10,
    bottom:10,
  },
  width:{
    fullWidth: '100%',
    deviceWidth: Dimensions.get('window').width
  },
  height:{
    fullHeight: '100%',
    deviceHeight: Dimensions.get('window').height,
    minHeight: 55
  },
}