import React, { useContext, useState, useEffect } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import Input from '../../components/Input';
import { RecipeContext } from '../../../App';
import styles from './styles';
import Card from '../../components/Card';

const Search = ({ navigation }) => {
  const { recipes } = useContext(RecipeContext);

  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    if (keyword?.length > 1) {
      const filteredItems = recipes?.filter((recipe) =>
        recipe?.name?.toLowerCase().includes(keyword?.toLowerCase())
      );

      setFilteredRecipes(filteredItems);
    } else {
      setFilteredRecipes([]);
    }
  }, [keyword]);

  return (
    <SafeAreaView style={styles.container}>
      <Input autoFocus onChangeText={setKeyword} value={keyword} />

      <FlatList
        data={filteredRecipes}
        style={{ marginBottom: 16, flexGrow: 1 }}
        keyExtractor={(item) => String(item?.id)}
        renderItem={({ item }) => (
          <Card
            title={item?.name}
            onPress={() => navigation.navigate('RecipeDetails', { item })}
            servings={item?.num_servings}
            image={item?.thumbnail_url}
            rating={item?.user_ratings?.score}
            author={
              item?.credits?.length
                ? {
                    name: item?.credits[0]?.name,
                    image: item?.credits[0]?.image_url,
                  }
                : null
            }
          />
        )}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default React.memo(Search);
