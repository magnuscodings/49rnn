import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons,MaterialCommunityIcons, Ionicons, AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons';



import Amoy from './Tabs/Amoy'
import FoundIt from './Tabs/FoundIt'
import Gallery from './Tabs/Gallery'
import ItsMine from './Tabs/ItsMine'
import Treasure from './Tabs/Treasure'

const Tab = createBottomTabNavigator();
const TabController = () => {
  return (
    <Tab.Navigator
    initialRouteName="Gallery"
    screenOptions={{
     tabBarLabel:'',
     headerShown:true,
     tabBarHideOnKeyboard:true,
     tabBarStyle: [{ 
       position:'relative',
       elevation:3,
       backgroundColor: 'white',
       borderTopLeftRadius:0,
       borderTopRightRadius:0,
       height:65,
       width:'100%',
//        shadowColor: '#000000',
       shadowOpacity:0.02,
       shadowOffset:{
             width:1,
             height:1
       },
     
     }]
    }}
    
    >

      <Tab.Screen
        name="Gallery"
        component={Gallery}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tab_container}>
              <Ionicons
                name="home"
                size={24}
                color={focused ? 'green' : 'gray'}
              />
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 12,
                  color: focused ? 'green' : 'gray',
                }}
              >
                49 gallery
              </Text>
            </View>
          ),
          headerTitle: () => (
            <Text style={styles.headerTitle}>49 Gallery</Text>
          ),
          headerTitleAlign: 'center', // Center the header title
          headerLeft: () => (
            <View style={styles.headerIconContainer}>
              <Ionicons
                name="search"
                size={24}
                color="gray"
              />
            </View>
          ),
          headerRight: () => (
            <View style={styles.headerIconContainer}>
              <AntDesign
                name="sharealt"
                size={24}
                color="gray"
              />
            </View>
          ),
        }}
      />


      <Tab.Screen
        name="FoundIt"
        component={FoundIt}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tab_container}>
              <Image source={require('../assets/icons/find.png')} style={styles.tab_icons} />
              <Text style={{ textAlign: 'center', fontSize: 12, color: focused ? 'green' : 'gray' }}>found</Text>
            </View>
          ),
          headerShown: false, // This hides the header for the specific screen
        }}
      />

      <Tab.Screen name="Amoy" component={Amoy} 
      options={{
          // tabBarBadge: 3,
          tabBarIcon: ({focused}) => {
              return (
                  <View style={styles.tab_container}>
                     <Image source ={require('../assets/icons/icon-41.png')} style={styles.tab_icons_center} />
                  
                   <Text style={{textAlign:'center',
                    color: focused ? 'green' : 'gray'}}>Amoy Market</Text>
                  </View>
               
              )
          },
          }}
      />
      <Tab.Screen name="Treasure" component={Treasure} 
               options={{
                  tabBarIcon: ({focused}) => {
                      return (
                          <View style={styles.tab_container}>
                             <Image source ={require('../assets/icons/gpc.png')} style={styles.tab_icons} />
                           <Text style={{textAlign:'center',fontSize:12,
                            color: focused ? 'green'  : 'gray'}}>Treasure Hunt</Text>
                          </View>
                       
                      )
                  },
                  headerShown: false, // This hides the header for the specific screen
                  }}
      />

  
    <Tab.Screen
            name="ItsMine"
            component={ItsMine}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={styles.tab_container}>
                <Image source ={require('../assets/icons/my-act.png')} style={styles.tab_icons} />  
            <Text style={{textAlign:'center',fontSize:12,
              color: focused ? 'green'  : 'gray'}}>It's mine</Text>
            </View>
              ),
              headerShown: false, // This hides the header for the specific screen
            }}
          />

    </Tab.Navigator>

  )
}

export default TabController

const styles = StyleSheet.create({

  tab_container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    color: 'black',
    textAlign:"center"
  },
  headerIconContainer: {
    paddingHorizontal: 16,
  },

  tab_icons:{
    marginTop:10,
    width:32,
    height:32
  },
  tab_icons_center:{
    width:40,
    height:40
  }
})