/* eslint-disable import/no-unresolved */
import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import { Colors, Fonts } from '../constants';

import HomeScreen from '../containers/HomeScreen';
import CalendarScreen from '../containers/CalendarScreen';
import GridsScreen from '../containers/GridsScreen';
import PagesScreen from '../containers/PagesScreen';
import ComponentsScreen from '../containers/ComponentsScreen';

const iconHome = require('../../assets/images/tabbar/home.png');
const iconCalendar = require('../../assets/images/tabbar/calendar.png');
const iconGrids = require('../../assets/images/tabbar/grids.png');
const iconPages = require('../../assets/images/tabbar/pages.png');
const iconComponents = require('../../assets/images/tabbar/components.png');

const hederBackground = require('../../assets/images/topBarBg.png');


const styles = StyleSheet.create({
  tabBarItemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: Colors.white,
    paddingHorizontal: 10,
  },
  tabBarIcon: {
    width: 23,
    height: 23,
  },
  tabBarIconFocused: {
    tintColor: Colors.primary,
  },
  headerContainer: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  headerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
  },
  headerCaption: {
    fontFamily: Fonts.primaryRegular,
    color: Colors.white,
    fontSize: 18,
  },
});

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
    Calendar: {
      screen: CalendarScreen,
      navigationOptions: {
        header: (
          <View style={styles.headerContainer}>
            <Image
              style={styles.headerImage}
              source={hederBackground}
            />
            <Text style={styles.headerCaption}>Calendar</Text>
          </View>
        ),
      },
    },
    Grids: {
      screen: GridsScreen,
      navigationOptions: {
        header: (
          <View style={styles.headerContainer}>
            <Image
              style={styles.headerImage}
              source={hederBackground}
            />
            <Text style={styles.headerCaption}>Grids</Text>
          </View>
        ),
      },
    },
    Pages: {
      screen: PagesScreen,
      navigationOptions: {
        header: (
          <View style={styles.headerContainer}>
            <Image
              style={styles.headerImage}
              source={hederBackground}
            />
            <Text style={styles.headerCaption}>Pages</Text>
          </View>
        ),
      },
    },
    Components: {
      screen: ComponentsScreen,
      navigationOptions: {
        header: (
          <View style={styles.headerContainer}>
            <Image
              style={styles.headerImage}
              source={hederBackground}
            />
            <Text style={styles.headerCaption}>Components</Text>
          </View>
        ),
      },
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconSource;
        switch (routeName) {
          case 'Home':
            iconSource = iconHome;
            break;
          case 'Calendar':
            iconSource = iconCalendar;
            break;
          case 'Grids':
            iconSource = iconGrids;
            break;
          case 'Pages':
            iconSource = iconPages;
            break;
          case 'Components':
            iconSource = iconComponents;
            break;
          default:
            iconSource = iconComponents;
        }
        return (
          <View
            style={styles.tabBarItemContainer}
          >
            <Image
              resizeMode="contain"
              source={iconSource}
              style={[styles.tabBarIcon, focused && styles.tabBarIconFocused]}
            />
          </View>
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      showLabel: true,
      style: {
        backgroundColor: Colors.white,
        borderTopWidth: 0.5,
        borderTopColor: '#d6d6d6',
      },
      labelStyle: {
        color: Colors.grey,
      },
    },
  },
);

