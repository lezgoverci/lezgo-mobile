import {StyleSheet} from 'react-native';
import Constants from './constants';


const Styles = StyleSheet.create({
  container: {
    alignItems: Constants.align.center,
    justifyContent: Constants.justify.center,
    padding: Constants.padding.md,
    zIndex: Constants.elevation.above,
    width: Constants.width.fullWidth

  },
  row:{
    width: Constants.width.fullWidth,
  },
  noPadding:{
    padding: Constants.padding.none
  },
  welcomePage:{
    flex: Constants.flex.full,
    alignItems: Constants.align.center,
    justifyContent: Constants.justify.center,
    backgroundColor:Constants.colors.primary
  },
  icon: {
    fontSize: Constants.icon.size,
    color: Constants.icon.color,
  },
  searchBar: {
    flex: Constants.flex.full,
    justifyContent: Constants.justify.center,
    paddingHorizontal: Constants.padding.md
  },
  searchBox: {
    flex: Constants.flex.full,
    flexDirection: Constants.flexDirection.row,
    paddingLeft: Constants.padding.sm,
    fontSize: Constants.fontSize.normal
  },
  searchIcons: {
    flexDirection: Constants.flexDirection.row,
    alignItems: Constants.align.center
  },
  card: {
    width: Constants.width.fullWidth,
    minHeight: Constants.height.minHeight,
    backgroundColor: Constants.colors.background,
    shadowColor: Constants.colors.shadow,
    shadowOffset: {
      width: Constants.shadow.offset.width,
      height: Constants.shadow.offset.height,
    },
    shadowOpacity: Constants.shadow.opacity,
    shadowRadius: Constants.shadow.radius,

    elevation: Constants.shadow.elevation,
    marginBottom: Constants.margin.bottom,
    borderRadius: Constants.border.radius,
    padding: Constants.padding.sm
  },
  filter: {
    flex: Constants.flex.full,
    justifyContent: Constants.justify.center,
    alignSelf: Constants.align.center,
    width: Constants.width.fullWidth,
    paddingHorizontal: Constants.padding.md
  },

  filterIcons: {
    flexDirection: Constants.flexDirection.row,
    alignItems: Constants.align.center,
    justifyContent: Constants.justify.spaceBetween
  },
  autoSuggestWrapper:{
    padding:Constants.padding.md
  },
  autoSuggestItems:{
    paddingBottom:Constants.padding.sm,
  },
  text:{
    fontSize: Constants.fontSize.lg,
    color: Constants.textColor.default,
    fontWeight: Constants.fontWeight.normal
  },
  textBold:{
    fontWeight: Constants.fontWeight.bold
  },
  heading1:{
    fontSize: Constants.fontSize.heading1,
    color: Constants.textColor.heading,
    paddingBottom: Constants.padding.sm
  },
  heading2:{
    fontSize: Constants.fontSize.heading2,
    color: Constants.textColor.heading,
    paddingBottom: Constants.padding.sm
  },
  heading3:{
    fontSize: Constants.fontSize.heading3,
    color: Constants.textColor.heading,
    paddingBottom: Constants.padding.sm
  },
  scrollView:{
    width: Constants.width.fullWidth
  },
  button:{
    borderRadius: Constants.border.radius, 
    height: Constants.button.height, 
    flexDirection: Constants.flexDirection.row, 
    alignItems: Constants.align.center, 
    justifyContent: Constants.justify.center, 
    paddingHorizontal:Constants.padding.md,
    maxWidth: Constants.button.maxWidth
  },
  buttonText:{
    color: Constants.textColor.button
  },
  buttonIcon:{
    fontSize: Constants.icon.size, 
    color: Constants.icon.colorInverted, 
    paddingRight: Constants.padding.sm
  },
  textButton:{
    color: Constants.colors.primary
  },
  textInput:{
    borderBottomWidth: 1,
    marginVertical: 20,
    borderBottomColor: Constants.colors.tertiary
  }
})

export default Styles;

