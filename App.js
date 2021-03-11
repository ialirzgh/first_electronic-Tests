import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';

const App = () => {
  const CustomStore = {
    bugs: [
      {description: 'i have a problem on sending out feedbacks', id: 1},
      {description: 'when i go to setting , an error pops up', id: 2},
      {
        description:
          'when the application starts , the fallowing error comes up',
        id: 3,
      },
      {description: 'i can use adding feature here !', id: 4},
      {
        description:
          'what the hell is happening with the setting concept of the app ?',
        id: 5,
      },
    ],
    currentUSer: {
      name: 'alireza',
      phone: '09194672412',
      sex: 'man',
    },
  };

  useEffect(() => {
    console.log(CustomStore.bugs[0]);
  });

  function Item({description}) {
    return (
      <View style={{backgroundColor: 'grey', marginTop: 10}}>
        <Text>{description}</Text>
      </View>
    );
  }
  function renderItem({item}) {
    return <Item description={item.description} />;
  }

  return (
    <>
      <View style={{flex: 1, backgroundColor: 'pink', alignItems: 'center'}}>
        <Text>This is The Best Todo App You Have Ever Seen</Text>
        <View
          style={{
            alignItems: 'center',
            backgroundColor: 'white',
            width: 370,
            height: 500,
            marginTop: 20,
            borderRadius: 20,
            elevation: 5,
            borderWidth: 2,
            borderColor: 'grey',
          }}>
          <Text style={{marginTop: 5, fontSize: 17}}>Todo List Goes Like</Text>
          <FlatList data={CustomStore.bugs} renderItem={renderItem} />
        </View>
      </View>
    </>
  );
};

export default App;
