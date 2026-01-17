import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

export default function App() {

  const notifications = [
    {
      id: '1',
      type: 'check',
      title: 'Bước 1 Xác định nhu cầu khách hàng',
      content: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00',
      time: '20/08/2020, 06:00',
    },
    {
      id: '2',
      type: 'user',
      title: 'Bạn có khách hàng mới!',
      content: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
      time: '20/08/2020, 06:00',
    },
    {
      id: '3',
      type: 'user',
      title: 'Khách hàng được chia sẻ bị trùng',
      content: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống.',
      time: '20/08/2020, 06:00',
    },
    {
      id: '4',
      type: 'check',
      title: 'Công việc sắp đến hạn trong hôm nay',
      content: 'Bạn có 17 công việc sắp đến hạn trong hôm nay.',
      time: '20/08/2020, 06:00',
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Ionicons
        name={item.type === 'check'
          ? 'checkmark-circle'
          : 'person-circle'}
        size={36}
        color="#5A4FCF"
        style={styles.icon}
      />

      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.content}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />

      <Text style={styles.header}>Thông báo</Text>

      <FlatList
        data={notifications}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
  fontSize: 30,
  fontWeight: 'bold',
  paddingHorizontal: 16,
  paddingBottom: 16,
  marginTop: 50
  ,   // 👈 dịch xuống dưới
},

  item: {
    flexDirection: 'row',
    padding: 12,
  },
  icon: {
    marginRight: 10,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  text: {
    marginVertical: 4,
    color: '#555',
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginLeft: 60,
  },
});
