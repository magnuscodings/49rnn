import { SafeAreaView, StyleSheet, Text, View,Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import React, { useState } from 'react';
import CustomHeader from '../../components/CustomHeader'
import BottomSheetLogin from '../../components/BottomSheetLogin'

const ItsMine = () => {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  const toggleBottomSheet = () => {
    setBottomSheetVisible(!bottomSheetVisible);
    console.log(bottomSheetVisible)
  };



  return (
     <ScrollView>
        <CustomHeader> 
          <View style={{flex:1,justifyContent:'left',alignItems:'center',flexDirection:'row',marginLeft:20,marginTop:10}}>
            <Image source={require('../../assets/icons/login-49.png')} style={styles.logimage}/>
            <TouchableOpacity style={styles.logbutton} onPress={toggleBottomSheet}>
            <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#07c160' }}>Log in / Register</Text>
            </TouchableOpacity>
          </View>
        </CustomHeader>

    
        <View style={{padding:10}}>
         <Image source={require('../../assets/memberbg.png')} style={{resizeMode:'cover',width:'100%',height:100,borderRadius:10}}/>
          <View style={{flex:1,justifyContent:'left',alignItems:'center',flexDirection:'row',marginLeft:20,position:'absolute',marginTop:33}}>
              <Image source={require('../../assets/icons/login-49.png')} style={styles.logimage2}/>
              <TouchableOpacity style={styles.logbutton2} >
              <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>立即登录</Text>
              <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>暂时还不是会员</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.logbutton3} onPress={toggleBottomSheet}>
              <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#e6a227' }}>立即登录</Text>
              </TouchableOpacity>
            </View>
        </View>

     

           <View style={{padding:20}}>
          <Text style={{fontWeight:'bold',fontSize:20}}>必备工具</Text>
          <View style={{flexDirection:'row', justifyContent: 'space-between' }}>

            <TouchableOpacity style={styles.icon_button}>
              <Image source={require('../../assets/icons/p1.png')} style={styles.icon} />
              <Text style={styles.icon_text}>申请代言人</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.icon_button}>
              <Image source={require('../../assets/icons/p2.png')} style={styles.icon} />
              <Text style={styles.icon_text}>活动中心</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.icon_button}>
              <Image source={require('../../assets/icons/p3.png')} style={styles.icon} />
              <Text style={styles.icon_text}>邀请好友</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.icon_button}>
              <Image source={require('../../assets/icons/p4.png')} style={styles.icon} />
              <Text style={styles.icon_text}>卡包</Text>
            </TouchableOpacity>

   
          </View>

          <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:12}}>

            <TouchableOpacity style={styles.icon_button}>
              <Image source={require('../../assets/icons/p5.png')} style={styles.icon} />
              <Text style={styles.icon_text}>卡包</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.icon_button}>
              <Image source={require('../../assets/icons/p6.png')} style={styles.icon} />
              <Text style={styles.icon_text}>月度报表</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.icon_button}>
              <Image source={require('../../assets/icons/pp7.png')} style={styles.icon} />
              <Text style={styles.icon_text}>月度报表</Text>
            </TouchableOpacity>

            <View style={{marginLeft:42}}>

            </View>

          </View>
          <TouchableOpacity>
            <Image source={require('../../assets/drybg.png')} style={{resizeMode:'contain',width:'100%'}}/>
         </TouchableOpacity>
          <View>
          <Text style={{fontWeight:'bold',fontSize:20}}>我的频道</Text>

          <View style={{flexDirection:'row', justifyContent: 'space-between' }}>
            <TouchableOpacity style={styles.icon_button}>
              <Image source={require('../../assets/icons/yen.png')} style={styles.icon} />
              <Text style={styles.icon_text}>我的账户</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.icon_button}>
              <Image source={require('../../assets/icons/user.png')} style={styles.icon} />
              <Text style={styles.icon_text}>我的主页</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.icon_button}>
              <Image source={require('../../assets/icons/award.png')} style={styles.icon} />
              <Text style={styles.icon_text}>我的勋章</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.icon_button}>
              <Image source={require('../../assets/icons/tele.png')} style={styles.icon} />
              <Text style={styles.icon_text}>我的推广</Text>
            </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row', justifyContent: 'space-between' }}>
            <TouchableOpacity style={styles.icon_button}>
              <Image source={require('../../assets/icons/star.png')} style={styles.icon} />
              <Text style={styles.icon_text}>我的收藏</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.icon_button}>
              <Image source={require('../../assets/icons/chat22.png')} style={styles.icon} />
              <Text style={styles.icon_text}>我的评论</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.icon_button}>
              <Image source={require('../../assets/icons/heart.png')} style={styles.icon} />
              <Text style={styles.icon_text}>我的关注</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.icon_button}>
              <Image source={require('../../assets/icons/heart2.png')} style={styles.icon} />
              <Text style={styles.icon_text}>我的粉丝</Text>
            </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:1}}>

            <TouchableOpacity style={styles.icon_button}>
              <Image source={require('../../assets/icons/thumb.png')} style={styles.icon} />
              <Text style={styles.icon_text}>我的点赞</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.icon_button}>
              <Image source={require('../../assets/icons/home2.png')} style={styles.icon} />
              <Text style={styles.icon_text}>小黑屋</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.icon_button}>
              <Image source={require('../../assets/icons/notuser2.png')} style={styles.icon} />
              <Text style={styles.icon_text}>黑名单</Text>
            </TouchableOpacity>

            <View style={{marginLeft:50}} />
            </View>


          </View>


          <View style={{marginTop:10}}>
          <Text style={{fontWeight:'bold',fontSize:20}}>必备工具</Text>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:0}}>

          <TouchableOpacity style={styles.icon_button}>
            <Image source={require('../../assets/icons/t1.png')} style={styles.icon} />
            <Text style={styles.icon_text}>粉丝排行榜</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.icon_button}>
            <Image source={require('../../assets/icons/t2.png')} style={styles.icon} />
            <Text style={styles.icon_text}>等级排行榜</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.icon_button}>
            <Image source={require('../../assets/icons/t3.png')} style={styles.icon} />
            <Text style={styles.icon_text}>分享排行榜</Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.icon_button}>
            <Image source={require('../../assets/icons/t4.png')} style={styles.icon} />
            <Text style={styles.icon_text}>礼物排行榜</Text>
          </TouchableOpacity>

          </View>

          </View>


          <View style={{marginTop:10}}>
          <Text style={{fontWeight:'bold',fontSize:20}}>平台信息</Text>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:0}}>

          <TouchableOpacity style={styles.icon_button}>
            <Image source={require('../../assets/icons/envelop.png')} style={styles.icon} />
            <Text style={styles.icon_text}>站内信息</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.icon_button}>
            <Image source={require('../../assets/icons/chitchat.png')} style={styles.icon} />
            <Text style={styles.icon_text}>联系客服</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.icon_button}>
            <Image source={require('../../assets/icons/userg.png')} style={styles.icon} />
            <Text style={styles.icon_text}>关于我们</Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.icon_button}>
            <Image source={require('../../assets/icons/msgs.png')} style={styles.icon} />
            <Text style={styles.icon_text}>意见反馈</Text>
          </TouchableOpacity>

          </View>

          <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:0}}>

              <TouchableOpacity style={styles.icon_button}>
                <Image source={require('../../assets/icons/brush.png')} style={styles.icon} />
                <Text style={styles.icon_text}>清除缓存</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.icon_button}>
                <Image source={require('../../assets/icons/mobile.png')} style={styles.icon} />
                <Text style={styles.icon_text}>下载APP</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.icon_button}>
                <Image source={require('../../assets/icons/msgs.png')} style={styles.icon} />
                <Text style={styles.icon_text}>举报记录</Text>
              </TouchableOpacity>


              <TouchableOpacity style={styles.icon_button}>
                <Image source={require('../../assets/icons/settings.png')} style={styles.icon} />
                <Text style={styles.icon_text}>平台设置</Text>
              </TouchableOpacity>

              </View>

          </View>


          

        </View>








        <BottomSheetLogin visibility={bottomSheetVisible} toggleSelect={toggleBottomSheet} />


     </ScrollView>
  )
}

export default ItsMine

const styles = StyleSheet.create({
  icon_text:{
    marginTop:3
  },
  icon_button:{
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column'
  },
  icon:{
    width:50,height:50,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'contain' depending on your preference
  },
  logimage2:{
    borderRadius:50,
    borderWidth:2,
    borderColor:'white',
    width:50,height:50,
    marginLeft:20,
  },
  logimage:{
    borderRadius:50,
    borderWidth:2,
    borderColor:'white'
  },

  logbutton3:{
    backgroundColor:'#ffecc7',
    borderRadius:20,
    width:100,
    height:50,
    alignItems:'left',
    padding:10,
    marginLeft:-45,
    flexDirection:'column'
  },
  logbutton2:{
    borderRadius:20,
    width:200,
    height:50,
    //justifyContent:'left',
    alignItems:'left',
    padding:10,
    marginLeft:20,
    marginTop:-30,
    flexDirection:'column'

  },
  logbutton:{
    backgroundColor:'white',
    borderRadius:20,
    width:200,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    marginLeft:20,
  },

})