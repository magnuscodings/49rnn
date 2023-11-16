import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, TextInput,ScrollView,FlatList } from 'react-native';
import { Feather,AntDesign } from '@expo/vector-icons';
import CardWithTextNoLike from '../../components/CardWithTextNoLike';
import CardWithTextLong from '../../components/CardWithTextLong';
const Treasure = () => {
  const [activeButton, setActiveButton] = useState('All'); // Initially set to 'Button 1'
  const [searchText, setSearchText] = useState('');

  const LiveImage = [
    {
      image: 'https://jmz.jixingkaisuo.com:4949/unite49files/amyd/2023/04/25/20230425164709-267377083.png',
      description: 'Complete website collection',

    },
    {
      image: 'https://jmz.jixingkaisuo.com:4949/unite49files/amyd/2020/12/17/20201217232215--742922214.png',
      description: 'NewColor Gallery',

    },
    {
      image: 'https://jmz.jixingkaisuo.com:4949/unite49files/amyd/2020/12/17/20201217232555--384242220.png',
      description: 'New Color Library',

    },
    {
      image: 'https://jmz.jixingkaisuo.com:4949/unite49files/amyd/2020/12/17/20201217232330--1468399154.png',
      description: 'New Color Forum',

    },
    {
      image: 'https://jmz.jixingkaisuo.com:4949/unite49files/amyd/2020/12/17/20201217232413-1537625728.png',
      description: 'New Color Net',

    },
    {
      image: 'https://jmz.jixingkaisuo.com:4949/unite49files/amyd/2020/12/17/20201217232447-1775447828.png',
      description: 'New color information network',

    },

    {
      image: 'https://jmz.jixingkaisuo.com:4949/unite49files/amyd/2020/12/18/20201218135047-1.png',
      description: 'Hot Investment',

    },
    {
      image: 'https://jmz.jixingkaisuo.com:4949/unite49files/amyd/2020/12/18/20201218135107-2.png',
      description: 'Hot Investment',

    },
    {
      image: 'https://jmz.jixingkaisuo.com:4949/unite49files/amyd/2020/12/18/20201218135158-4.png',
      description: 'Hot Investment',
    },
    {
      image: 'https://jmz.jixingkaisuo.com:4949/unite49files/amyd/2023/07/14/20230714132830-369035655.png',
      description: 'Full house forum',
    },
  ];

  const LiveImage2 = [
    {
      image: 'https://jmz.jixingkaisuo.com:4949/unite49files/tmp/2023/07/28/20230728232821--1847982143.jpg',
      description: '2388 Lottery',

    },
    {
      image: 'https://jmz.jixingkaisuo.com:4949/unite49files/tmp/2023/03/01/20230301112742-1700tkdb.jpg',
      description: '1700 Lottery',
  
    },
    {
      image: 'https://jmz.jixingkaisuo.com:4949/unite49files/tmp/2022/10/01/20221001103204--2045032681.jpg',
      description: '100 Lottery',
   
    },
    {
      image: 'https://jmz.jixingkaisuo.com:4949/unite49files/tmp/2022/01/15/20220115131336-852.jpg',
      description: 'Lei Feng Lottery',
    },
    {
      image: 'https://jmz.jixingkaisuo.com:4949/unite49files/tmp/2022/05/25/20220525162905-2025.jpg',
      description: '2025 Lottery',
 
    },
    {
      image: 'https://jmz.jixingkaisuo.com:4949/unite49files/tmp/2022/01/15/20220115130738-9898.jpg',
      description: '9898 Lottery',
    },
    {
      image: 'https://jmz.jixingkaisuo.com:4949/unite49files/tmp/2022/05/25/20220525162929-895.jpg',
      description: 'Australian Lottery',
    },
    {
      image: 'https://jmz.jixingkaisuo.com:4949/unite49files/tmp/2022/01/15/20220115131448-1989.jpg',
      description: '1989 Lottery',
    },
  ];


  const handleButtonPress = (buttonText) => {
    setActiveButton(buttonText);
  };

  const handleSearch = () => {
    // Perform search logic using the searchText
    console.log('Search for:', searchText);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, activeButton === 'All' && styles.activeButton]}
          onPress={() => handleButtonPress('All')}
        >
          <Text style={[styles.buttonText, activeButton === 'All' && styles.activeButtonText]}>Complete website collection</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, activeButton === 'Recommend' && styles.activeButton]}
          onPress={() => handleButtonPress('Recommend')}
        >
          <Text style={[styles.buttonText, activeButton === 'Recommend' && styles.activeButtonText]}>Guarantee Platform</Text>
        </TouchableOpacity>
      </View>

      {activeButton === 'All' ? (
      <FlatList
        data={LiveImage}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <CardWithTextNoLike
            imageSource={item.image}
            description={item.description}
            numColumns={4}
          />
        )}
        numColumns={4}
        contentContainerStyle={{ ...styles.cardList, paddingBottom: 150 }}
      />
      ) : (

        <ScrollView>
        {LiveImage2.map((item, index) => (
          <CardWithTextLong
            key={index}
            imageSource={item.image}
            description={item.description}
            numColumns={4}
          />
        ))}

        <View style={{marginTop:80}}/>
      </ScrollView>
      

      )}
      
        {/* FloatingActionButton */}
        {/* <TouchableOpacity style={styles.fab}>
        <AntDesign name="plus" size={24} color="green" />
        <Text style={styles.fabText}>MENU</Text>
      </TouchableOpacity> */}



    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: '50%', // Position vertically centered
    right: 16,
    transform: [{ translateY: -12 }], // Adjust based on the FAB's height
    backgroundColor: 'white',
    borderRadius: 0, // Make it a circle
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 2,
    },
  },
  fabText: {
    color: 'black',
    marginLeft: 8,
  },
  cardList:{
    marginTop:10,
    padding:20,
    backgroundColor:'white',
    paddingHorizontal: 16,
    paddingTop: 16,
    alignItems: 'center', // Center items horizontally
  },
  container: {

    backgroundColor: '#F6F6F6',

  },
  buttonContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    marginBottom:-10,
    marginTop:10,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderColor: 'gray',
  },
  activeButton: {
    borderColor: 'green',
  },
  buttonText: {
    color: 'gray',
    fontWeight:'bold'
  },
  activeButtonText: {
    color: 'green',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  searchButton: {
    padding: 10,
  },
});

export default Treasure;
