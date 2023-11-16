// Import the necessary modules
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';



  

// export const Request_Balls = ({ apiUrl }) => {
//     const text ='asdasd';

//   useEffect(() => {
//   // Define the API endpoint
//   const apiUrl = 'https://zhibo.yuexiawang.com:777/js/i1i1i1i1i1l1l1l1l0.js?_=121212';

//   // Make the API request using fetch
//   fetch(apiUrl)
//     .then(response => response.json())
//     .then(result => {
//       /// Update the state with the fetched data
//     //  const arr = (result['k'].split(','));
//         text = (JSON.stringify(result));
//     })
    
// }, []); 

  
//     return (
//       <View >
//           <Text >{text}</Text>
//       </View>
//     );
//   };
  
export const Request_Balls = ({ apiUrl, keyname }) => {
    const [text, setText] = useState();
  
    useEffect(() => {
      // Make the API request using fetch
      fetch(apiUrl)
        .then((response) => response.json())
        .then((result) => {
          // Check if the keyname exists in the result
          if (keyname in result) {
            // Update the state with the fetched data
            setText(JSON.stringify(result[keyname]));
          } else {
            console.error(`Key '${keyname}' not found in API response.`);
          }
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, [apiUrl, keyname]); // Add apiUrl and keyname to the dependency array to re-run the effect when apiUrl or keyname changes
  
    return <Text>{text}</Text>;

  };
  