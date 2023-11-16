import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";



//Screens
import TabConroller from "./screens/TabController"
import FoundTabAll from "./screens/Tabs/FoundTabs/FoundTabAll";
import FoundTabReccommend from "./screens/Tabs/FoundTabs/FoundTabReccommend";
const MyStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
          <MyStack.Navigator>
          <MyStack.Screen name="TabController" options={{headerShown: false}} component={TabConroller} />
          <MyStack.Screen name="FoundTabAll" options={{headerShown: false}} component={FoundTabAll} />
          <MyStack.Screen name="FoundTabReccommend" options={{headerShown: false}} component={FoundTabReccommend} />
          </MyStack.Navigator>

    
    </NavigationContainer>
  )
}

export default App

