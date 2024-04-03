import React, {useContext, useState, useEffect, useRef,} from "react";
import { View, Text, TextInput, ActivityIndicator, TouchableHighlight, SafeAreaView, Button,Appearance,Dimensions, ImageBackground, BackHandler, ScrollView, StyleSheet } from 'react-native';
import { Switch } from "react-native";
import { colors } from "../../config/theme";
import { ThemeContext } from "../../context/ThemeContext";
import StyledText from "../../components/texts/StyledText";
import SettingsItem from "../../components/settings/SettingsItem";

const { width, height } = Dimensions.get('screen');

function Settings() {

  const { theme, updateTheme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

  const [isDarkTheme, setIsDarkTheme] = useState(theme.mode === "dark");

  
  const toggleTheme = () => {
    updateTheme();
    setIsDarkTheme((prev) => !prev);
  };

  useEffect(() => {
    
    Appearance.addChangeListener(({ colorScheme }) => {
      colorScheme === "dark" ? setIsDarkTheme(true) : setIsDarkTheme(false);
    });
  }, []);

   return (

    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#03bafc'}}>
    //     <Text>Settings Screen</Text>
    // </View>

  
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        style={[{ backgroundColor: activeColors.primary }, styles.Container]}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {/* <StyledText style={{ color: activeColors.accent }} bold>
          User
        </StyledText>
  
        <View style={styles.section}>
          <SettingsItem label="Name">
            <StyledText>Maro</StyledText>
          </SettingsItem>
          <SettingsItem label="Joined On">
            <StyledText>02/12/2022</StyledText>
          </SettingsItem>
        </View> */}
  
        <StyledText style={{ color: activeColors.accent }} bold>
          Theme Switch
        </StyledText>
  
        <View style={styles.section}>
          <SettingsItem label="Dark Mode">
            <Switch
              value={isDarkTheme}
              onValueChange={toggleTheme}
              thumbColor={isDarkTheme ? "#fff" : activeColors.tertiary}
              ios_backgroundColor={activeColors.primary}
              trackColor={{
                false: activeColors.primary,
                true: activeColors.accent,
              }}
            ></Switch>
          </SettingsItem>
        </View>
      </ScrollView>
    
  );
}



const styles = StyleSheet.create({

  Container: {
    flex: 1,
    padding: 25,
  },
  section: {
    borderRadius: 30,
    overflow: "hidden",
    marginTop: 25,
    marginBottom: 25,
  },
  
});

export default Settings;

