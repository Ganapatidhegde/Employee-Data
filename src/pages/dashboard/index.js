import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import useGlobal from "../../redux";

const Dashboard = ({ navigation }) => {
  const [globalState] = useGlobal();
  const employees = globalState.user;

  return (
    <ScrollView>
      <View style={styles.dashboardContainer}>
        <Text style={[styles.centeredText, styles.boldFont, styles.largeFont]}>
          EMPLOYEE LIST
        </Text>
        {employees.map((each, key) => {
          return (
            <View
              key={key}
              style={[
                key !== employees.length - 1 ? styles.borderClass : null,
                styles.userData,
              ]}
            >
              <Text style={[styles.mediumFont, styles.boldFont]}>
                Id :<Text style={[styles.normalFont]}>{each.id}</Text>
              </Text>
              <Text style={[styles.mediumFont, styles.boldFont]}>
                Name :
                <Text style={[styles.normalFont, styles.capitalisedText]}>
                  {each.name}
                </Text>
              </Text>
              <Text style={[styles.mediumFont, styles.boldFont]}>
                Gender :<Text style={[styles.normalFont]}>{each.gender}</Text>
              </Text>
              <Text style={[styles.mediumFont, styles.boldFont]}>
                Email :<Text style={[styles.normalFont]}>{each.email}</Text>
              </Text>
              <Text style={[styles.mediumFont, styles.boldFont]}>
                Ph.No :<Text style={[styles.normalFont]}>{each.phoneNo}</Text>
              </Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  dashboardContainer: {
    width: "100%",
    marginTop: 50,
  },

  userData: {
    paddingVertical: 16,
    marginHorizontal: 16,
  },
  borderClass: {
    borderBottomWidth: 1,
    borderBottomColor: "coral",
  },
  boldFont: {
    fontWeight: "bold",
  },
  mediumFont: {
    fontSize: 22,
  },
  normalFont: {
    fontWeight: "normal",
  },
  largeFont: {
    fontSize: 32,
  },
  capitalisedText: {
    textTransform: "capitalize",
  },
  centeredText: {
    textAlign: "center",
  },
});

export default Dashboard;
