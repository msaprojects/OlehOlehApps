import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const setScreen = (screen) =>{
  this.setState({screen: screen})
}
export default class App extends React.Component {
  render(){
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <View style={{backgroundColor: 'white', flex: 1}}>
            {/* APP HEADER */}
            <View Style={{padding:15, marginTop: 10}}>
              <View style={{paddingLeft: 14, alignItems: 'center', paddingRight: 14, paddingTop: 10, justifyContent: 'space-between', flexDirection: 'row', position: 'relative'}}>
                <Image style={{left:0, height:30, width:100}} source={require('./icon/logo.png')}></Image> 
                <View style={{}}>
                  <Image style={{position: 'absolute', top: 10, left: 12, height: 20, width: 20}} source={require('./icon/search.png')}/>
                  <TextInput placeholder="Apa yang anda cari?" style={{borderWidth: 1, borderColor: '#E8E8E8', height: 40, fontSize: 13, paddingLeft: 35, paddingRight: 15, borderRadius: 25, width: 200}}></TextInput>
                </View>
              </View>
            </View>
            {/* DASHBOARD USER */}
            <View style={{marginHorizontal: 17, marginTop: 15}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: "#FFF6D5", borderTopLeftRadius: 5, borderTopRightRadius: 5, padding: 10}}>
                <View style={{flexDirection: 'column'}}>
                  <Text style={{fontSize: 12}}>Selamat Siang,</Text>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>Syahrul</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Image style={{height: 15, width: 15}} source={require('./icon/flagtagged.png')}/>
                  <Text style={{fontSize: 14}}>Yogyakarta</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: "#FFF6D5", borderBottomLeftRadius: 5, borderBottomRightRadius: 5, paddingRight: 10, paddingBottom: 10, paddingLeft: 10}}>
                <View style={{backgroundColor: '#ffffff', alignItems: 'center', flexDirection: 'row', borderRadius: 7, padding: 4}}>
                  <Image style={{height: 13, width: 11}} source={require('./icon/coin.png')}/>
                  <Text style={{marginLeft: 3, fontSize: 12, fontWeight: 'bold'}}>200</Text>
                  <Text style={{ marginLeft: 1,fontSize: 11}}>point</Text>
                </View>
                <View style={{backgroundColor: '#ffffff', marginLeft: 5, alignItems: 'center', flexDirection: 'row', borderRadius: 7, padding: 4}}>
                  <Image style={{height: 13, width: 11}} source={require('./icon/share.png')}/>
                  <Text style={{marginLeft: 3, fontSize: 12, fontWeight: 'bold'}}>15</Text>
                  <Text style={{ marginLeft: 1,fontSize: 11}}>Share</Text>
                </View>
                <View style={{backgroundColor: '#ffffff', marginLeft: 5, alignItems: 'center', flexDirection: 'row', borderRadius: 7, padding: 4}}>
                  <Image style={{height: 13, width: 11}} source={require('./icon/share.png')}/>
                  <Text style={{marginLeft: 3, fontSize: 12, fontWeight: 'bold'}}>15</Text>
                  <Text style={{ marginLeft: 1,fontSize: 11}}>voucher</Text>
                </View>
              </View>
            </View>
            {/* MENU */}
            <View style={{marginHorizontal: 20}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <View style={{flexDirection: 'column', alignItems: 'center', marginTop: 10, marginBottom: 15, marginLeft: 5, marginRight: 5}}>
                  <Image style={{height: 45, width: 45}} source={require('./icon/gift.png')}/>
                  <Text style={{fontSize: 12}}>Oleh - Oleh</Text>
                </View>
                <View style={{flexDirection: 'column', alignItems: 'center', marginTop: 10, marginBottom: 15, marginLeft: 5, marginRight: 5}}>
                  <Image style={{height: 45, width: 45}} source={require('./icon/hotels.png')}/>
                  <Text style={{fontSize: 12}}>Hotel</Text>
                </View>
                <View style={{flexDirection: 'column', alignItems: 'center', marginTop: 10, marginBottom: 15, marginLeft: 5, marginRight: 5}}>
                  <Image style={{height: 45, width: 45}} source={require('./icon/food.png')}/>
                  <Text style={{fontSize: 12}}>Makanan</Text>
                </View>
                <View style={{flexDirection: 'column', alignItems: 'center', marginTop: 10, marginBottom: 15, marginLeft: 5, marginRight: 5}}>
                  <Image style={{height: 45, width: 45}} source={require('./icon/deal.png')}/>
                  <Text style={{fontSize: 12}}>Layanan</Text>
                </View>
              </View>
            </View>
            {/* SPLITTER */}
            <View style={{height: 17, backgroundColor: "#F2F2F4"}}></View>
            {/* NEARBY OLEH - OLEH */}
            <View style={{marginTop: 15}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, paddingHorizontal: 20}}>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: '#1C1C1C'}}>Oleh - Oleh</Text>
                <Text style={{fontSize: 14, fontWeight: 'bold', color: '#1C1C1C'}}>See All</Text>
              </View>
              <View>
                <ScrollView horizontal style={{flexDirection: 'row', paddingLeft: 20, paddingRight: 20}}>
                  <View style={{flexDirection: 'column', alignItems: 'flex-start', marginRight: 15}}>
                    <View style={{width: 150, height: 150, borderRadius: 25, backgroundColor: 'green'}}>
                      <Image style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1}} source={require('./icon/oleh/klepon.jpg')}/>
                    </View>
                    <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 8}}>Klepon</Text>
                  </View>
                  <View style={{flexDirection: 'column', alignItems: 'flex-start', marginRight: 10}}>
                    <View style={{width: 150, height: 150, borderRadius: 25, backgroundColor: 'green'}}>
                      <Image style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1}} source={require('./icon/oleh/kue-lumpur.jpg')}/>
                    </View>
                    <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 8}}>Kue Lumpur</Text>
                  </View>
                  <View style={{flexDirection: 'column', alignItems: 'flex-start', marginRight: 10}}>
                    <View style={{width: 150, height: 150, borderRadius: 25, backgroundColor: 'green'}}>
                      <Image style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1}} source={require('./icon/oleh/onde-onde.jpg')}/>
                    </View>
                    <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 8}}>Onde - Onde</Text>
                  </View>
                  <View style={{flexDirection: 'column', alignItems: 'flex-start', marginRight: 10}}>
                    <View style={{width: 150, height: 150, borderRadius: 25, backgroundColor: 'green'}}>
                      <Image style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1}} source={require('./icon/oleh/tapai-singkong.jpg')}/>
                    </View>
                    <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 8}}>Tapai Singkong</Text>
                  </View>
                  <View style={{flexDirection: 'column', alignItems: 'flex-start', marginRight: 10}}>
                    <View style={{width: 150, height: 150, borderRadius: 25, backgroundColor: 'green'}}>
                      <Image style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1}} source={require('./icon/oleh/bakpia-pathok.jpg')}/>
                    </View>
                    <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 8}}>Bakpia Pathok</Text>
                  </View>
                </ScrollView>
              </View>
            </View>
            {/* NEARBY PROMO */}
            <View style={{marginTop: 15}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, paddingHorizontal: 20}}>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: '#1C1C1C'}}>Promo</Text>
                <Text style={{fontSize: 14, fontWeight: 'bold', color: '#1C1C1C'}}>See All</Text>
              </View>
              <View>
                <ScrollView horizontal style={{flexDirection: 'row', paddingLeft: 20, paddingRight: 20}}>
                  <View style={{flexDirection: 'column', alignItems: 'flex-start', marginRight: 15}}>
                    <View style={{width: 285, height: 150, borderRadius: 25, backgroundColor: 'green'}}>
                      <Image style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1}} source={require('./icon/promo/promo1.jpeg')}/>
                    </View>
                    <Text style={{fontSize: 13, marginTop: 8}}>Klepon</Text>
                  </View>
                  
                </ScrollView>
              </View>
            </View>
            {/* NEARBY WISATA */}
            <View style={{marginTop: 15}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, paddingHorizontal: 20}}>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: '#1C1C1C'}}>Wisata</Text>
                <Text style={{fontSize: 14, fontWeight: 'bold', color: '#1C1C1C'}}>See All</Text>
              </View>
              <View>
                <ScrollView horizontal style={{flexDirection: 'row', paddingLeft: 20, paddingRight: 20}}>
                  <View style={{flexDirection: 'column', alignItems: 'flex-start', marginRight: 15}}>
                    <View style={{width: 275, height: 150, borderRadius: 25, backgroundColor: 'green'}}>
                      <Image style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1}} source={require('./icon/wisata/alun2kidul.jpg')}/>
                    </View>
                    <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 8}}>Alun - Alun</Text>
                  </View>
                  <View style={{flexDirection: 'column', alignItems: 'flex-start', marginRight: 10}}>
                    <View style={{width: 275, height: 150, borderRadius: 25, backgroundColor: 'green'}}>
                      <Image style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1}} source={require('./icon/wisata/batu_songgolangit.jpg')}/>
                    </View>
                    <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 8}}>Batu Songgo Langit</Text>
                  </View>
                  <View style={{flexDirection: 'column', alignItems: 'flex-start', marginRight: 10}}>
                    <View style={{width: 275, height: 150, borderRadius: 25, backgroundColor: 'green'}}>
                      <Image style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1}} source={require('./icon/wisata/borobudur.jpg')}/>
                    </View>
                    <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 8}}>Borobudur</Text>
                  </View>
                  <View style={{flexDirection: 'column', alignItems: 'flex-start', marginRight: 10}}>
                    <View style={{width: 275, height: 150, borderRadius: 25, backgroundColor: 'green'}}>
                      <Image style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1}} source={require('./icon/wisata/malioboro1.jpg')}/>
                    </View>
                    <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 8}}>Malioboro</Text>
                  </View>
                  <View style={{flexDirection: 'column', alignItems: 'flex-start', marginRight: 10}}>
                    <View style={{width: 275, height: 150, borderRadius: 25, backgroundColor: 'green'}}>
                      <Image style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1}} source={require('./icon/wisata/rumah_hobbit.jpg')}/>
                    </View>
                    <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 8}}>Rumah Hobbit</Text>
                  </View>
                </ScrollView>
              </View>
            </View>

            <View style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
              <Text>COBA BRO</Text>
                <button
                  title=" Go to Details"
                  onPress={()=> this.props.navigation.navigate('Details')}/>
            </View>

            {/* Tanggal Liburan */}
            <View style={{marginTop: 0, paddingHorizontal:20}}>
              
                <View>
                  <View style={{paddingTop: 1, paddingBottom:20, borderBottomColor:'#E8E9ED', borderBottomWidth: 1}}>
                  <View style={{ width:440, height:200, marginTop:20}}>
                  <Text style={{fontSize: 18, fontWeight: 'bold', color: '#1C1C1C', marginBottom:10}}>Kalender Liburan</Text>
                    <Image
                      style={{flex:1, height:null, width:null, resizeMode:'cover',borderRadius:5, borderWidth:1, borderColor:'#dddddd'}}
                      source={require('./icon/planned.jpg')}/>
                    </View>
                    <Text style={{fontSize: 16, fontWeight: 'bold', color:'#1C1C1C', marginTop:5}}>Ayo ! Segera cek kalender liburanmu mulai sekarang. Dan dapatkan promo menarik didalamnya.</Text>
                    <TouchableOpacity  style={{backgroundColor:'red', paddingHorizontal:13, paddingVertical:11, alignSelf: 'flex-end', borderRadius: 4}}>
                      <Text style={{fontSize:13, fontWeight: 'bold', color:'white'}}>READ</Text>
                    </TouchableOpacity>

                  </View>
                </View>
                </View>
          </View>
        </ScrollView>
        {/* BOTTOM NAVIGATION */}
        <View style={{height: 54, backgroundColor: '#FFFFFF', flexDirection: 'row', shadowColor: '#E8E8E8'}}>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={require('./icon/home-active.png')}/>
            <Text style={{fontSize: 10, marginTop: 4, color: '#1DB747'}}>Home</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={require('./icon/qrcode2.png')}/>
            <Text style={{fontSize: 10, marginTop: 4, color: '#1DB747'}}>Scan</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={require('./icon/notification.png')}/>
            <Text style={{fontSize: 10, marginTop: 4, color: '#1DB747'}}>Notification</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={require('./icon/profile.png')}/>
            <Text style={{fontSize: 10, marginTop: 4, color: '#1DB747'}}>Profile</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
