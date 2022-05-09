import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const HeaderTab = () => {
  const [activeTab, setActiveTab] = useState('Delivery');
  return (
    <View style={styles.btnContainer}>
      <HeaderButton
        text="Delivery"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

export default HeaderTab;

const HeaderButton = (props) => {
  const { text, activeTab, setActiveTab } = props;
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: activeTab === text ? 'black' : 'white',
          paddingVertical: 6,
          paddingHorizontal: 16,
          borderRadius: 30,
        }}
        onPress={() => setActiveTab(text)}
      >
        <Text
          style={{
            color: activeTab === text ? 'white' : 'black',
            fontSize: 15,
            fontWeight: 'bold',
          }}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
