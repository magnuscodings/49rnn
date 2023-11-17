//  const apiUrl = "https://h5.49217007.com:8443/unite49/app/index/lotteryTime"
//  const keyname = "data"
//  const [data, setData] = useState([]);

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await fetch(apiUrl);
//       const result = await response.json();
//       console.log(result); // Log the parsed JSON data

//       const LotteryDay = new Date(result.data.list[0].key).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })

//       setData(LotteryDay); // Update state with fetched data
//       // console.log(result.data.list[0].lotteryTime)



//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   fetchData();
// }, [apiUrl]);