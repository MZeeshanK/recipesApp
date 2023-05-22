import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Input from '../../components/Input';
import Title from '../../components/Title';
import Categories from '../../components/Categories';
import RecipeCard from '../../components/RecipeCard';
import Card from '../../components/Card';

const imageAddress = `https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80`;

const authorImage = `https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png`;

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Input pressable onPress={() => navigation.navigate('Search')} />

      <Title text="Featured Recipes" style={{ marginTop: 16 }} />

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginHorizontal: -24 }}
        data={[1, 2, 3]}
        keyExtractor={(item) => String(item)}
        renderItem={({ index }) => (
          <RecipeCard
            style={index === 0 ? { marginLeft: 24 } : {}}
            title="Steak with tamato sauce and bulgur rice"
            rating="4"
            image={imageAddress}
            author={{
              name: 'James Miller',
              image: authorImage,
            }}
            time="20 mins"
          />
        )}
      />
      <Categories
        categories={['All', 'Trending']}
        selectedCategory="All"
        onCategoryPress={() => {}}
      />

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginHorizontal: -24 }}
        data={[1, 2, 3]}
        keyExtractor={(item) => String(item)}
        renderItem={({ index }) => (
          <Card
            style={index === 0 ? { marginLeft: 24 } : {}}
            title="Steak with tamato sauce and bulgur rice"
            image={imageAddress}
            time="20 mins"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default React.memo(Home);
