import React from "react";
import ReactDOM from "react-dom/client";



                              // Header Component
const Header = ()=>{

return (
    <div id ="header-container">

        <div id="logo-container">
            <img className="logo" src="https://cdn2.f-cdn.com/contestentries/2426851/74260034/6689bc27dfb41_thumb900.jpg" />
        </div>
        <div id = "nav-items">
            <ul className = "list">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>

        </div>

    </div>
)
}


                                    //Body Component

const resFromApi= [
    {
      "info": {
        "id": "657474",
        "name": "Burger King",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/ea422e81-79ea-4ffa-b56b-bc0dbc34520d_657474.jpg",
        "locality": "R5 Chambers",
        "areaName": "Mehdipatnam",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "avgRating": 4.2,
        "parentId": "166",
        "avgRatingString": "4.2",
        "totalRatingsString": "9.2K+",
        "sla": {
          "deliveryTime": 19,
          "lastMileTravel": 2.6,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "2.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-06-24 04:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                  }
                }
              ]
            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-ab2799a4-a46b-4696-8cad-b036e74dada4"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/hyderabad/burger-king-r5-chambers-mehdipatnam-rest657474",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "10490",
        "name": "Pizza Hut",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/07e75785-f7d6-4fc9-b516-c6e20b33d09e_10490.JPG",
        "locality": "Banjara Hills",
        "areaName": "Banjara Hills",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRating": 4.3,
        "parentId": "721",
        "avgRatingString": "4.3",
        "totalRatingsString": "29K+",
        "sla": {
          "deliveryTime": 37,
          "lastMileTravel": 4.5,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "4.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-06-24 01:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Pizza.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Pizza.png"
                  }
                }
              ]
            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.0",
            "ratingCount": "3.6K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-ab2799a4-a46b-4696-8cad-b036e74dada4"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/hyderabad/pizza-hut-banjara-hills-rest10490",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "23734",
        "name": "McDonald's",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/3/9226049d-598f-4da2-8ebc-dc16c6d1b0a8_23734.jpg",
        "locality": "Mehdipatnam",
        "areaName": "Humayun Nagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Beverages",
          "Cafe",
          "Desserts"
        ],
        "avgRating": 4.3,
        "parentId": "630",
        "avgRatingString": "4.3",
        "totalRatingsString": "52K+",
        "sla": {
          "deliveryTime": 20,
          "lastMileTravel": 2.6,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "2.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-06-24 04:45:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                  }
                }
              ]
            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹179"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-ab2799a4-a46b-4696-8cad-b036e74dada4"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/hyderabad/mcdonalds-mehdipatnam-humayun-nagar-rest23734",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "156138",
        "name": "The Good Bowl",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/8e2663d7-8c42-4f31-bd7d-96aefe058851_156138.jpg",
        "locality": "Mehdipatnam FC",
        "areaName": "Humayun Nagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Biryani",
          "North Indian",
          "Pastas",
          "Punjabi",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "7918",
        "avgRatingString": "4.3",
        "totalRatingsString": "1.4K+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 2.6,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "2.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-06-23 23:59:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {

            },
            "textBased": {

            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "15% OFF",
          "subHeader": "ABOVE ₹1000",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-ab2799a4-a46b-4696-8cad-b036e74dada4"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/hyderabad/the-good-bowl-mehdipatnam-fc-humayun-nagar-rest156138",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "185544",
        "name": "NIC Ice Creams",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/10/62b24250-5b32-4bdb-8e79-cc5be831a3e4_185544.JPG",
        "locality": "Khairatabad",
        "areaName": "Banjara Hills",
        "costForTwo": "₹120 for two",
        "cuisines": [
          "Desserts",
          "Ice Cream"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "6249",
        "avgRatingString": "4.6",
        "totalRatingsString": "7.3K+",
        "sla": {
          "deliveryTime": 23,
          "lastMileTravel": 4.1,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "4.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-06-24 00:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "brand",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {

            },
            "textBased": {

            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "brand"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹148"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {

            },
            "video": {
            }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-ab2799a4-a46b-4696-8cad-b036e74dada4"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/hyderabad/nic-ice-creams-khairatabad-banjara-hills-rest185544",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "68320",
      "name": "Faasos - Wraps, Rolls & Shawarma",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/c0b0bd8a-87ea-47d4-afa8-eb21ba9a408a_68320.JPG",
      "locality": "Ground floor, Mehdipatnam (Behind Mina Hospital)",
      "areaName": "Humayun Nagar",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Kebabs",
        "Fast Food",
        "Snacks",
        "American",
        "Healthy Food",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4,
      "parentId": "21809",
      "avgRatingString": "4.0",
      "totalRatingsString": "8.0K+",
      "sla": {
        "deliveryTime": 18,
        "lastMileTravel": 2.6,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "2.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-06-23 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Rolls.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Rolls.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹89"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-ab2799a4-a46b-4696-8cad-b036e74dada4"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/hyderabad/faasos-wraps-rolls-and-shawarma-ground-floor-mehdipatnam-behind-mina-hospital-humayun-nagar-rest68320",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "794402",
      "name": "Kwality Walls Ice Cream and More",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/d69f8ada-159b-4e33-a2ae-66767e2ac43f_794402.JPG",
      "locality": "Chirag Ali Lane",
      "areaName": "Banjara Hills",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Ice Cream",
        "Desserts"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "582",
      "avgRatingString": "4.4",
      "totalRatingsString": "182",
      "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-06-23 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹150 OFF",
        "subHeader": "ABOVE ₹449",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-ab2799a4-a46b-4696-8cad-b036e74dada4"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/hyderabad/kwality-walls-ice-cream-and-more-chirag-ali-lane-banjara-hills-rest794402",
      "type": "WEBLINK"
    }
  }
]



const RestaurantCard = (props)=>{
     
  const {resObj} = props;
  console.log(resObj)

    return (

        <div className="res-card">
            <div className="res-info">
                <img className="lo" src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resObj.info.cloudinaryImageId}/>
                <h2>{resObj.info.name}</h2>
                <h3>{resObj.info.cuisines.join
                    (",")}</h3>
                <h3>{resObj.info.avgRating}</h3>
                <h3>{resObj.info.sla.deliveryTime} Minutes</h3>
                <button style={{textAlign:"center",marginTop :"5px"}}>Order Now!</button>
            </div>
        </div>
    )
}





const Body = ()=>{
    return (
        <div id ="body">
             <div className = "search-container">Search bar</div>
             <div className="res-container">
                 {resFromApi.map((restaurant)=>{
                   return <RestaurantCard resObj = {restaurant} key={restaurant.info.id}></RestaurantCard>
                 })}
             </div>
        </div>
    )
}




                                    //App Component
const App = ()=>{
    return (
        <div id= "app">
            <Header></Header>
            <Body></Body>
         
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)
