// BetTypeConstants.js
export const betTypelist = [
    {
      name: '号码',
      type: 1,
      column: 4,
      tips: '猜特码号码',
    },
    {
      name: '大小',
      type: 2,
      column: 2,
      tips: '猜特码大小(49为和)',
    },
    {
      name: '单双',
      type: 3,
      column: 2,
      tips: '猜特码单双(49为和)',
    },
    {
      name: '波色',
      type: 4,
      column: 3,
      tips: '猜特码所属颜色',
    },
    {
      name: '生肖',
      type: 5,
      column: 3,
      tips: '猜特码所属生肖',
    },
    {
      name: '头数',
      type: 6,
      column: 3,
      tips: '猜特码数字的头数',
    },
    {
      name: '尾数',
      type: 7,
      column: 3,
      tips: '猜特码数字的头数',
    },
    {
      name: '合单双',
      type: 8,
      column: 2,
      tips: '猜特码两数相加后的单数(49为和)',
    },
    {
      name: '家野',
      type: 9,
      column: 2,
      tips: '猜特码所属的动物属性',
    },
    {
      name: '尾大小',
      type: 10,
      column: 2,
      tips: '猜特码尾数大小(49为和)',
    },
  ];
  
  export const getBetType = (type) => {
    const find = betTypelist.find((o) => o.type === type);
    return find;
  };
  

//example usage
// import React from 'react';
// import { View, Text } from 'react-native';
// import { betTypelist, getBetType } from './BetTypeConstants'; // Update the path accordingly

// const App = () => {
//   const betType = getBetType(1); // Example usage, you can change the type value

//   return (
//     <View>
//       <Text>Name: {betType.name}</Text>
//       <Text>Type: {betType.type}</Text>
//       <Text>Column: {betType.column}</Text>
//       <Text>Tips: {betType.tips}</Text>
//     </View>
//   );
// };

// export default App;