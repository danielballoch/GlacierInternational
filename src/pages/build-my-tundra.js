import React, {useState, useEffect} from "react"
import {Helmet} from 'react-helmet'
import styled from '@emotion/styled';
import Layout from "../components/layout"

import PriceFinanceBar from "../components/buildMyTundra/priceFinanceBar"
import MainImage from "../components/buildMyTundra/mainImage"
import FeatureBar from "../components/buildMyTundra/featureBar";
import MobileFeatureSection from "../components/buildMyTundra/mobileFeatureSection";
import MobileSelectionTab from "../components/buildMyTundra/mobileSelectionTab";

//import 1794 images
import Black17941 from "../images/tundra/1794/1794/Black1794/Black17941.png"
import Black17942 from "../images/tundra/1794/1794/Black1794/Black17942.png"
import Black17943 from "../images/tundra/1794/1794/Black1794/Black17943.png"
import Black17944 from "../images/tundra/1794/1794/Black1794/Black17944.png"
import Blue17941 from "../images/tundra/1794/1794/Blue1794/Blue17941.png"
import Blue17942 from "../images/tundra/1794/1794/Blue1794/Blue17942.png"
import Blue17943 from "../images/tundra/1794/1794/Blue1794/Blue17943.png"
import Blue17944 from "../images/tundra/1794/1794/Blue1794/Blue17944.png"
import Grey17941 from "../images/tundra/1794/1794/Grey1794/Grey17941.png"
import Grey17942 from "../images/tundra/1794/1794/Grey1794/Grey17942.png"
import Grey17943 from "../images/tundra/1794/1794/Grey1794/Grey17943.png"
import Grey17944 from "../images/tundra/1794/1794/Grey1794/Grey17944.png"
import Green17941 from "../images/tundra/1794/1794/Green1794/Green17941.png"
import Green17942 from "../images/tundra/1794/1794/Green1794/Green17942.png"
import Green17943 from "../images/tundra/1794/1794/Green1794/Green17943.png"
import Green17944 from "../images/tundra/1794/1794/Green1794/Green17944.png"
import Mesquite17941 from "../images/tundra/1794/1794/Mesquite1794/Mesquite17941.png"
import Mesquite17942 from "../images/tundra/1794/1794/Mesquite1794/Mesquite17942.png"
import Mesquite17943 from "../images/tundra/1794/1794/Mesquite1794/Mesquite17943.png"
import Mesquite17944 from "../images/tundra/1794/1794/Mesquite1794/Mesquite17944.png"
import Red17941 from "../images/tundra/1794/1794/Red1794/Red17941.png"
import Red17942 from "../images/tundra/1794/1794/Red1794/Red17942.png"
import Red17943 from "../images/tundra/1794/1794/Red1794/Red17943.png"
import Red17944 from "../images/tundra/1794/1794/Red1794/Red17944.png"
import Silver17941 from "../images/tundra/1794/1794/Silver1794/Silver17941.png"
import Silver17942 from "../images/tundra/1794/1794/Silver1794/Silver17942.png"
import Silver17943 from "../images/tundra/1794/1794/Silver1794/Silver17943.png"
import Silver17944 from "../images/tundra/1794/1794/Silver1794/Silver17944.png"

import Black1794Longbed1 from "../images/tundra/1794/1794Longbed/Black1794/BlackLongbed17941.png"
import Black1794Longbed2 from "../images/tundra/1794/1794Longbed/Black1794/BlackLongbed17942.png"
import Black1794Longbed3 from "../images/tundra/1794/1794Longbed/Black1794/BlackLongbed17943.png"
import Black1794Longbed4 from "../images/tundra/1794/1794Longbed/Black1794/BlackLongbed17944.png"
import Blue1794Longbed1 from "../images/tundra/1794/1794Longbed/Blue1794/BlueLongbed17941.png"
import Blue1794Longbed2 from "../images/tundra/1794/1794Longbed/Blue1794/BlueLongbed17942.png"
import Blue1794Longbed3 from "../images/tundra/1794/1794Longbed/Blue1794/BlueLongbed17943.png"
import Blue1794Longbed4 from "../images/tundra/1794/1794Longbed/Blue1794/BlueLongbed17944.png"
import Grey1794Longbed1 from "../images/tundra/1794/1794Longbed/Grey1794/GreyLongbed17941.png"
import Grey1794Longbed2 from "../images/tundra/1794/1794Longbed/Grey1794/GreyLongbed17942.png"
import Grey1794Longbed3 from "../images/tundra/1794/1794Longbed/Grey1794/GreyLongbed17943.png"
import Grey1794Longbed4 from "../images/tundra/1794/1794Longbed/Grey1794/GreyLongbed17944.png"
import Green1794Longbed1 from "../images/tundra/1794/1794Longbed/Green1794/GreenLongbed17941.png"
import Green1794Longbed2 from "../images/tundra/1794/1794Longbed/Green1794/GreenLongbed17942.png"
import Green1794Longbed3 from "../images/tundra/1794/1794Longbed/Green1794/GreenLongbed17943.png"
import Green1794Longbed4 from "../images/tundra/1794/1794Longbed/Green1794/GreenLongbed17944.png"
import Mesquite1794Longbed1 from "../images/tundra/1794/1794Longbed/Mesquite1794/MesquiteLongbed17941.png"
import Mesquite1794Longbed2 from "../images/tundra/1794/1794Longbed/Mesquite1794/MesquiteLongbed17942.png"
import Mesquite1794Longbed3 from "../images/tundra/1794/1794Longbed/Mesquite1794/MesquiteLongbed17943.png"
import Mesquite1794Longbed4 from "../images/tundra/1794/1794Longbed/Mesquite1794/MesquiteLongbed17944.png"
import Red1794Longbed1 from "../images/tundra/1794/1794Longbed/Red1794/RedLongbed17941.png"
import Red1794Longbed2 from "../images/tundra/1794/1794Longbed/Red1794/RedLongbed17942.png"
import Red1794Longbed3 from "../images/tundra/1794/1794Longbed/Red1794/RedLongbed17943.png"
import Red1794Longbed4 from "../images/tundra/1794/1794Longbed/Red1794/RedLongbed17944.png"
import Silver1794Longbed1 from "../images/tundra/1794/1794Longbed/Silver1794/SilverLongbed17941.png"
import Silver1794Longbed2 from "../images/tundra/1794/1794Longbed/Silver1794/SilverLongbed17942.png"
import Silver1794Longbed3 from "../images/tundra/1794/1794Longbed/Silver1794/SilverLongbed17943.png"
import Silver1794Longbed4 from "../images/tundra/1794/1794Longbed/Silver1794/SilverLongbed17944.png"

import Interior17941 from "../images/tundra/1794/Interior1794/Interior17941.png"
import Interior17942 from "../images/tundra/1794/Interior1794/Interior17942.png"
import Interior17943 from "../images/tundra/1794/Interior1794/Interior17943.png"
import Interior17944 from "../images/tundra/1794/Interior1794/Interior17944.png"

//import Capstone Images
import BlackCapstone1 from "../images/tundra/Capstone/Capstone/BlackCapstone/BlackCapstone1.png"
import BlackCapstone2 from "../images/tundra/Capstone/Capstone/BlackCapstone/BlackCapstone2.png"
import BlackCapstone3 from "../images/tundra/Capstone/Capstone/BlackCapstone/BlackCapstone3.png"
import BlackCapstone4 from "../images/tundra/Capstone/Capstone/BlackCapstone/BlackCapstone4.png"
import BlueCapstone1 from "../images/tundra/Capstone/Capstone/BlueCapstone/BlueCapstone1.png"
import BlueCapstone2 from "../images/tundra/Capstone/Capstone/BlueCapstone/BlueCapstone2.png"
import BlueCapstone3 from "../images/tundra/Capstone/Capstone/BlueCapstone/BlueCapstone3.png"
import BlueCapstone4 from "../images/tundra/Capstone/Capstone/BlueCapstone/BlueCapstone4.png"
import GreyCapstone1 from "../images/tundra/Capstone/Capstone/GreyCapstone/GreyCapstone1.png"
import GreyCapstone2 from "../images/tundra/Capstone/Capstone/GreyCapstone/GreyCapstone2.png"
import GreyCapstone3 from "../images/tundra/Capstone/Capstone/GreyCapstone/GreyCapstone3.png"
import GreyCapstone4 from "../images/tundra/Capstone/Capstone/GreyCapstone/GreyCapstone4.png"
import PearlCapstone1 from "../images/tundra/Capstone/Capstone/PearlCapstone/PearlCapstone1.png"
import PearlCapstone2 from "../images/tundra/Capstone/Capstone/PearlCapstone/PearlCapstone2.png"
import PearlCapstone3 from "../images/tundra/Capstone/Capstone/PearlCapstone/PearlCapstone3.png"
import PearlCapstone4 from "../images/tundra/Capstone/Capstone/PearlCapstone/PearlCapstone4.png"
import RedCapstone1 from "../images/tundra/Capstone/Capstone/RedCapstone/RedCapstone1.png"
import RedCapstone2 from "../images/tundra/Capstone/Capstone/RedCapstone/RedCapstone2.png"
import RedCapstone3 from "../images/tundra/Capstone/Capstone/RedCapstone/RedCapstone3.png"
import RedCapstone4 from "../images/tundra/Capstone/Capstone/RedCapstone/RedCapstone4.png"
import SilverCapstone1 from "../images/tundra/Capstone/Capstone/SilverCapstone/SilverCapstone1.png"
import SilverCapstone2 from "../images/tundra/Capstone/Capstone/SilverCapstone/SilverCapstone2.png"
import SilverCapstone3 from "../images/tundra/Capstone/Capstone/SilverCapstone/SilverCapstone3.png"
import SilverCapstone4 from "../images/tundra/Capstone/Capstone/SilverCapstone/SilverCapstone4.png"

import InteriorCapstone1 from "../images/tundra/Capstone/InteriorCapstone/InteriorCapstone1.png"
import InteriorCapstone2 from "../images/tundra/Capstone/InteriorCapstone/InteriorCapstone2.png"
import InteriorCapstone3 from "../images/tundra/Capstone/InteriorCapstone/InteriorCapstone3.png"
import InteriorCapstone4 from "../images/tundra/Capstone/InteriorCapstone/InteriorCapstone4.png"

//import Limited Images
import BlackLimited1 from "../images/tundra/Limited/Limited/BlackLimited/BlackLimited1.png"
import BlackLimited2 from "../images/tundra/Limited/Limited/BlackLimited/BlackLimited2.png"
import BlackLimited3 from "../images/tundra/Limited/Limited/BlackLimited/BlackLimited3.png"
import BlackLimited4 from "../images/tundra/Limited/Limited/BlackLimited/BlackLimited4.png"
import BlueLimited1 from "../images/tundra/Limited/Limited/BlueLimited/BlueLimited1.png"
import BlueLimited2 from "../images/tundra/Limited/Limited/BlueLimited/BlueLimited2.png"
import BlueLimited3 from "../images/tundra/Limited/Limited/BlueLimited/BlueLimited3.png"
import BlueLimited4 from "../images/tundra/Limited/Limited/BlueLimited/BlueLimited4.png"
import GreenLimited1 from "../images/tundra/Limited/Limited/GreenLimited/GreenLimited1.png"
import GreenLimited2 from "../images/tundra/Limited/Limited/GreenLimited/GreenLimited2.png"
import GreenLimited3 from "../images/tundra/Limited/Limited/GreenLimited/GreenLimited3.png"
import GreenLimited4 from "../images/tundra/Limited/Limited/GreenLimited/GreenLimited4.png"
import GreyLimited1 from "../images/tundra/Limited/Limited/GreyLimited/GreyLimited1.png"
import GreyLimited2 from "../images/tundra/Limited/Limited/GreyLimited/GreyLimited2.png"
import GreyLimited3 from "../images/tundra/Limited/Limited/GreyLimited/GreyLimited3.png"
import GreyLimited4 from "../images/tundra/Limited/Limited/GreyLimited/GreyLimited4.png"
import MesquiteLimited1 from "../images/tundra/Limited/Limited/MesquiteLimited/MesquiteLimited1.png"
import MesquiteLimited2 from "../images/tundra/Limited/Limited/MesquiteLimited/MesquiteLimited2.png"
import MesquiteLimited3 from "../images/tundra/Limited/Limited/MesquiteLimited/MesquiteLimited3.png"
import MesquiteLimited4 from "../images/tundra/Limited/Limited/MesquiteLimited/MesquiteLimited4.png"
import PearlLimited1 from "../images/tundra/Limited/Limited/PearlLimited/PearlLimited1.png"
import PearlLimited2 from "../images/tundra/Limited/Limited/PearlLimited/PearlLimited2.png"
import PearlLimited3 from "../images/tundra/Limited/Limited/PearlLimited/PearlLimited3.png"
import PearlLimited4 from "../images/tundra/Limited/Limited/PearlLimited/PearlLimited4.png"
import RedLimited1 from "../images/tundra/Limited/Limited/RedLimited/RedLimited1.png"
import RedLimited2 from "../images/tundra/Limited/Limited/RedLimited/RedLimited2.png"
import RedLimited3 from "../images/tundra/Limited/Limited/RedLimited/RedLimited3.png"
import RedLimited4 from "../images/tundra/Limited/Limited/RedLimited/RedLimited4.png"
import RockLimited1 from "../images/tundra/Limited/Limited/RockLimited/RockLimited1.png"
import RockLimited2 from "../images/tundra/Limited/Limited/RockLimited/RockLimited2.png"
import RockLimited3 from "../images/tundra/Limited/Limited/RockLimited/RockLimited3.png"
import RockLimited4 from "../images/tundra/Limited/Limited/RockLimited/RockLimited4.png"
import SilverLimited1 from "../images/tundra/Limited/Limited/SilverLimited/SilverLimited1.png"
import SilverLimited2 from "../images/tundra/Limited/Limited/SilverLimited/SilverLimited2.png"
import SilverLimited3 from "../images/tundra/Limited/Limited/SilverLimited/SilverLimited3.png"
import SilverLimited4 from "../images/tundra/Limited/Limited/SilverLimited/SilverLimited4.png"
import WhiteLimited1 from "../images/tundra/Limited/Limited/WhiteLimited/WhiteLimited1.png"
import WhiteLimited2 from "../images/tundra/Limited/Limited/WhiteLimited/WhiteLimited2.png"
import WhiteLimited3 from "../images/tundra/Limited/Limited/WhiteLimited/WhiteLimited3.png"
import WhiteLimited4 from "../images/tundra/Limited/Limited/WhiteLimited/WhiteLimited4.png"


//import Limited Longbed Images
import BlackLimitedLongbed1 from "../images/tundra/Limited/LimitedLongbed/BlackLimited/BlackLimited1.png"
import BlackLimitedLongbed2 from "../images/tundra/Limited/LimitedLongbed/BlackLimited/BlackLimited2.png"
import BlackLimitedLongbed3 from "../images/tundra/Limited/LimitedLongbed/BlackLimited/BlackLimited3.png"
import BlackLimitedLongbed4 from "../images/tundra/Limited/LimitedLongbed/BlackLimited/BlackLimited4.png"
import BlueLimitedLongbed1 from "../images/tundra/Limited/LimitedLongbed/BlueLimited/BlueLimited1.png"
import BlueLimitedLongbed2 from "../images/tundra/Limited/LimitedLongbed/BlueLimited/BlueLimited2.png"
import BlueLimitedLongbed3 from "../images/tundra/Limited/LimitedLongbed/BlueLimited/BlueLimited3.png"
import BlueLimitedLongbed4 from "../images/tundra/Limited/LimitedLongbed/BlueLimited/BlueLimited4.png"
import GreenLimitedLongbed1 from "../images/tundra/Limited/LimitedLongbed/GreenLimited/GreenLimited1.png"
import GreenLimitedLongbed2 from "../images/tundra/Limited/LimitedLongbed/GreenLimited/GreenLimited2.png"
import GreenLimitedLongbed3 from "../images/tundra/Limited/LimitedLongbed/GreenLimited/GreenLimited3.png"
import GreenLimitedLongbed4 from "../images/tundra/Limited/LimitedLongbed/GreenLimited/GreenLimited4.png"
import GreyLimitedLongbed1 from "../images/tundra/Limited/LimitedLongbed/GreyLimited/GreyLimited1.png"
import GreyLimitedLongbed2 from "../images/tundra/Limited/LimitedLongbed/GreyLimited/GreyLimited2.png"
import GreyLimitedLongbed3 from "../images/tundra/Limited/LimitedLongbed/GreyLimited/GreyLimited3.png"
import GreyLimitedLongbed4 from "../images/tundra/Limited/LimitedLongbed/GreyLimited/GreyLimited4.png"
import MesquiteLimitedLongbed1 from "../images/tundra/Limited/LimitedLongbed/MesquiteLimited/MesquiteLimited1.png"
import MesquiteLimitedLongbed2 from "../images/tundra/Limited/LimitedLongbed/MesquiteLimited/MesquiteLimited2.png"
import MesquiteLimitedLongbed3 from "../images/tundra/Limited/LimitedLongbed/MesquiteLimited/MesquiteLimited3.png"
import MesquiteLimitedLongbed4 from "../images/tundra/Limited/LimitedLongbed/MesquiteLimited/MesquiteLimited4.png"
import PearlLimitedLongbed1 from "../images/tundra/Limited/LimitedLongbed/PearlLimited/PearlLimited1.png"
import PearlLimitedLongbed2 from "../images/tundra/Limited/LimitedLongbed/PearlLimited/PearlLimited2.png"
import PearlLimitedLongbed3 from "../images/tundra/Limited/LimitedLongbed/PearlLimited/PearlLimited3.png"
import PearlLimitedLongbed4 from "../images/tundra/Limited/LimitedLongbed/PearlLimited/PearlLimited4.png"
import RedLimitedLongbed1 from "../images/tundra/Limited/LimitedLongbed/RedLimited/RedLimited1.png"
import RedLimitedLongbed2 from "../images/tundra/Limited/LimitedLongbed/RedLimited/RedLimited2.png"
import RedLimitedLongbed3 from "../images/tundra/Limited/LimitedLongbed/RedLimited/RedLimited3.png"
import RedLimitedLongbed4 from "../images/tundra/Limited/LimitedLongbed/RedLimited/RedLimited4.png"
import RockLimitedLongbed1 from "../images/tundra/Limited/LimitedLongbed/RockLimited/RockLimited1.png"
import RockLimitedLongbed2 from "../images/tundra/Limited/LimitedLongbed/RockLimited/RockLimited2.png"
import RockLimitedLongbed3 from "../images/tundra/Limited/LimitedLongbed/RockLimited/RockLimited3.png"
import RockLimitedLongbed4 from "../images/tundra/Limited/LimitedLongbed/RockLimited/RockLimited4.png"
import SilverLimitedLongbed1 from "../images/tundra/Limited/LimitedLongbed/SilverLimited/SilverLimited1.png"
import SilverLimitedLongbed2 from "../images/tundra/Limited/LimitedLongbed/SilverLimited/SilverLimited2.png"
import SilverLimitedLongbed3 from "../images/tundra/Limited/LimitedLongbed/SilverLimited/SilverLimited3.png"
import SilverLimitedLongbed4 from "../images/tundra/Limited/LimitedLongbed/SilverLimited/SilverLimited4.png"
import WhiteLimitedLongbed1 from "../images/tundra/Limited/LimitedLongbed/WhiteLimited/WhiteLimited1.png"
import WhiteLimitedLongbed2 from "../images/tundra/Limited/LimitedLongbed/WhiteLimited/WhiteLimited2.png"
import WhiteLimitedLongbed3 from "../images/tundra/Limited/LimitedLongbed/WhiteLimited/WhiteLimited3.png"
import WhiteLimitedLongbed4 from "../images/tundra/Limited/LimitedLongbed/WhiteLimited/WhiteLimited4.png"

import InteriorLimited1 from "../images/tundra/Limited/InteriorLimited/InteriorLimited1.png"
import InteriorLimited2 from "../images/tundra/Limited/InteriorLimited/InteriorLimited2.png"
import InteriorLimited3 from "../images/tundra/Limited/InteriorLimited/InteriorLimited3.png"
import InteriorLimited4 from "../images/tundra/Limited/InteriorLimited/InteriorLimited4.png"

//import Platinum Images
import BlackPlatinum1 from "../images/tundra/Platinum/Platinum/BlackPlatinum/BlackPlatinum1.png"
import BlackPlatinum2 from "../images/tundra/Platinum/Platinum/BlackPlatinum/BlackPlatinum2.png"
import BlackPlatinum3 from "../images/tundra/Platinum/Platinum/BlackPlatinum/BlackPlatinum3.png"
import BlackPlatinum4 from "../images/tundra/Platinum/Platinum/BlackPlatinum/BlackPlatinum4.png"
import BluePlatinum1 from "../images/tundra/Platinum/Platinum/BluePlatinum/BluePlatinum1.png"
import BluePlatinum2 from "../images/tundra/Platinum/Platinum/BluePlatinum/BluePlatinum2.png"
import BluePlatinum3 from "../images/tundra/Platinum/Platinum/BluePlatinum/BluePlatinum3.png"
import BluePlatinum4 from "../images/tundra/Platinum/Platinum/BluePlatinum/BluePlatinum4.png"
import GreyPlatinum1 from "../images/tundra/Platinum/Platinum/GreyPlatinum/GreyPlatinum1.png"
import GreyPlatinum2 from "../images/tundra/Platinum/Platinum/GreyPlatinum/GreyPlatinum2.png"
import GreyPlatinum3 from "../images/tundra/Platinum/Platinum/GreyPlatinum/GreyPlatinum3.png"
import GreyPlatinum4 from "../images/tundra/Platinum/Platinum/GreyPlatinum/GreyPlatinum4.png"
import PearlPlatinum1 from "../images/tundra/Platinum/Platinum/PearlPlatinum/PearlPlatinum1.png"
import PearlPlatinum2 from "../images/tundra/Platinum/Platinum/PearlPlatinum/PearlPlatinum2.png"
import PearlPlatinum3 from "../images/tundra/Platinum/Platinum/PearlPlatinum/PearlPlatinum3.png"
import PearlPlatinum4 from "../images/tundra/Platinum/Platinum/PearlPlatinum/PearlPlatinum4.png"
import RedPlatinum1 from "../images/tundra/Platinum/Platinum/RedPlatinum/RedPlatinum1.png"
import RedPlatinum2 from "../images/tundra/Platinum/Platinum/RedPlatinum/RedPlatinum2.png"
import RedPlatinum3 from "../images/tundra/Platinum/Platinum/RedPlatinum/RedPlatinum3.png"
import RedPlatinum4 from "../images/tundra/Platinum/Platinum/RedPlatinum/RedPlatinum4.png"
import SilverPlatinum1 from "../images/tundra/Platinum/Platinum/SilverPlatinum/SilverPlatinum1.png"
import SilverPlatinum2 from "../images/tundra/Platinum/Platinum/SilverPlatinum/SilverPlatinum2.png"
import SilverPlatinum3 from "../images/tundra/Platinum/Platinum/SilverPlatinum/SilverPlatinum3.png"
import SilverPlatinum4 from "../images/tundra/Platinum/Platinum/SilverPlatinum/SilverPlatinum4.png"

//import Platinum Longbed Images
import BlackPlatinumLongbed1 from "../images/tundra/Platinum/PlatinumLongbed/BlackPlatinumLongbed/BlackPlatinumLongbed1.png"
import BlackPlatinumLongbed2 from "../images/tundra/Platinum/PlatinumLongbed/BlackPlatinumLongbed/BlackPlatinumLongbed2.png"
import BlackPlatinumLongbed3 from "../images/tundra/Platinum/PlatinumLongbed/BlackPlatinumLongbed/BlackPlatinumLongbed3.png"
import BlackPlatinumLongbed4 from "../images/tundra/Platinum/PlatinumLongbed/BlackPlatinumLongbed/BlackPlatinumLongbed4.png"
import BluePlatinumLongbed1 from "../images/tundra/Platinum/PlatinumLongbed/BluePlatinumLongbed/BluePlatinumLongbed1.png"
import BluePlatinumLongbed2 from "../images/tundra/Platinum/PlatinumLongbed/BluePlatinumLongbed/BluePlatinumLongbed2.png"
import BluePlatinumLongbed3 from "../images/tundra/Platinum/PlatinumLongbed/BluePlatinumLongbed/BluePlatinumLongbed3.png"
import BluePlatinumLongbed4 from "../images/tundra/Platinum/PlatinumLongbed/BluePlatinumLongbed/BluePlatinumLongbed4.png"
import GreyPlatinumLongbed1 from "../images/tundra/Platinum/PlatinumLongbed/GreyPlatinumLongbed/GreyPlatinumLongbed1.png"
import GreyPlatinumLongbed2 from "../images/tundra/Platinum/PlatinumLongbed/GreyPlatinumLongbed/GreyPlatinumLongbed2.png"
import GreyPlatinumLongbed3 from "../images/tundra/Platinum/PlatinumLongbed/GreyPlatinumLongbed/GreyPlatinumLongbed3.png"
import GreyPlatinumLongbed4 from "../images/tundra/Platinum/PlatinumLongbed/GreyPlatinumLongbed/GreyPlatinumLongbed4.png"
import PearlPlatinumLongbed1 from "../images/tundra/Platinum/PlatinumLongbed/PearlPlatinumLongbed/PearlPlatinumLongbed1.png"
import PearlPlatinumLongbed2 from "../images/tundra/Platinum/PlatinumLongbed/PearlPlatinumLongbed/PearlPlatinumLongbed2.png"
import PearlPlatinumLongbed3 from "../images/tundra/Platinum/PlatinumLongbed/PearlPlatinumLongbed/PearlPlatinumLongbed3.png"
import PearlPlatinumLongbed4 from "../images/tundra/Platinum/PlatinumLongbed/PearlPlatinumLongbed/PearlPlatinumLongbed4.png"
import RedPlatinumLongbed1 from "../images/tundra/Platinum/PlatinumLongbed/RedPlatinumLongbed/RedPlatinumLongbed1.png"
import RedPlatinumLongbed2 from "../images/tundra/Platinum/PlatinumLongbed/RedPlatinumLongbed/RedPlatinumLongbed2.png"
import RedPlatinumLongbed3 from "../images/tundra/Platinum/PlatinumLongbed/RedPlatinumLongbed/RedPlatinumLongbed3.png"
import RedPlatinumLongbed4 from "../images/tundra/Platinum/PlatinumLongbed/RedPlatinumLongbed/RedPlatinumLongbed4.png"
import SilverPlatinumLongbed1 from "../images/tundra/Platinum/PlatinumLongbed/SilverPlatinumLongbed/SilverPlatinumLongbed1.png"
import SilverPlatinumLongbed2 from "../images/tundra/Platinum/PlatinumLongbed/SilverPlatinumLongbed/SilverPlatinumLongbed2.png"
import SilverPlatinumLongbed3 from "../images/tundra/Platinum/PlatinumLongbed/SilverPlatinumLongbed/SilverPlatinumLongbed3.png"
import SilverPlatinumLongbed4 from "../images/tundra/Platinum/PlatinumLongbed/SilverPlatinumLongbed/SilverPlatinumLongbed4.png"

import InteriorPlatinum1 from "../images/tundra/Platinum/InteriorPlatinum/InteriorPlatinum1.png"
import InteriorPlatinum2 from "../images/tundra/Platinum/InteriorPlatinum/InteriorPlatinum2.png"
import InteriorPlatinum3 from "../images/tundra/Platinum/InteriorPlatinum/InteriorPlatinum3.png"
import InteriorPlatinum4 from "../images/tundra/Platinum/InteriorPlatinum/InteriorPlatinum4.png"

//import all TRDPRO images
import BlackTRDPRO1 from "../images/tundra/TRDPRO/BlackTRDPRO/BlackTRDPRO1.png"
import BlackTRDPRO2 from "../images/tundra/TRDPRO/BlackTRDPRO/BlackTRDPRO2.png"
import BlackTRDPRO3 from "../images/tundra/TRDPRO/BlackTRDPRO/BlackTRDPRO3.png"
import BlackTRDPRO4 from "../images/tundra/TRDPRO/BlackTRDPRO/BlackTRDPRO4.png"
import GreyTRDPRO1 from "../images/tundra/TRDPRO/GreyTRDPRO/GreyTRDPRO1.png"
import GreyTRDPRO2 from "../images/tundra/TRDPRO/GreyTRDPRO/GreyTRDPRO2.png"
import GreyTRDPRO3 from "../images/tundra/TRDPRO/GreyTRDPRO/GreyTRDPRO3.png"
import GreyTRDPRO4 from "../images/tundra/TRDPRO/GreyTRDPRO/GreyTRDPRO4.png"
import SolarTRDPRO1 from "../images/tundra/TRDPRO/SolarTRDPRO/SolarTRDPRO1.png"
import SolarTRDPRO2 from "../images/tundra/TRDPRO/SolarTRDPRO/SolarTRDPRO2.png"
import SolarTRDPRO3 from "../images/tundra/TRDPRO/SolarTRDPRO/SolarTRDPRO3.png"
import SolarTRDPRO4 from "../images/tundra/TRDPRO/SolarTRDPRO/SolarTRDPRO4.png"
import WhiteTRDPRO1 from "../images/tundra/TRDPRO/WhiteTRDPRO/WhiteTRDPRO1.png"
import WhiteTRDPRO2 from "../images/tundra/TRDPRO/WhiteTRDPRO/WhiteTRDPRO2.png"
import WhiteTRDPRO3 from "../images/tundra/TRDPRO/WhiteTRDPRO/WhiteTRDPRO3.png"
import WhiteTRDPRO4 from "../images/tundra/TRDPRO/WhiteTRDPRO/WhiteTRDPRO4.png"

import InteriorTRDPRO1 from "../images/tundra/TRDPRO/InteriorTRDPRO/InteriorTRDPRO1.png"
import InteriorTRDPRO2 from "../images/tundra/TRDPRO/InteriorTRDPRO/InteriorTRDPRO2.png"
import InteriorTRDPRO3 from "../images/tundra/TRDPRO/InteriorTRDPRO/InteriorTRDPRO3.png"
import InteriorTRDPRO4 from "../images/tundra/TRDPRO/InteriorTRDPRO/InteriorTRDPRO4.png"



const pageStyles = {
    padding: 0,
    margin: "100px 0 0 0",
    backgroundColor: "white"
  }

const Main = styled.div`
padding: 0;
font-family: 'visby',sans-serif;
color: white;
h1 {
    /* margin-top: 100px; */
    text-align: center;
    color: white;
    font-size: 50px;
}
body {
    
    margin: 0;
    padding: 0;
}

video {
    gridArea: 1/1;
    position: relative;
    placeItems: center;
    display: grid;
    object-fit: cover;
    object-position: 32%; 
    height: 100vh;
    @media(maxWidth){
        /* object-fit: cover;
        object-position: 32%; 
        height: 100vw;
        */
    }
}
.popup {
    @media (max-width: 1050px){
        top: 15%;
        width: 80%;
        left: 10%;
    }
    left: calc(35vw - 350px);
    text-align: center;
    width: 700px;
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 60%;
    z-index: 100;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    /* margin: 10px; */
    /* padding: 20px; */
    background-color: white;
    border-radius: 10px;
    color: black;
    p {
        padding: 20px;
    }
    a {
        margin: 20px;
    }
}
.none {
    display: none;
}
`
const Row = styled.div`
display: flex;
justify-content: right;
flex-direction: row;
align-items: center;
`




//needed so window.width doesn't thow error
const isBrowser = typeof window !== "undefined";


const IndexPage = ({display=false}) => {
    const grades = [
        {name: "Limited Hybrid TRD OFF ROAD", colors: ["Midnight Black Metallic","Blueprint","Army Green","Magnetic Grey Metallic","Smoked Mesquite","Wind Chill Pearl","Supersonic Red","Lunar Rock","Celestial Silver Metallic", "Ice Cap"], src: [BlackLimited1, BlueLimited1, GreenLimited1, GreyLimited1,MesquiteLimited1, PearlLimited1, RedLimited1, RockLimited1, SilverLimited1, WhiteLimited1,BlackLimited2, BlueLimited2, GreenLimited2, GreyLimited2,MesquiteLimited2, PearlLimited2, RedLimited2, RockLimited2, SilverLimited2, WhiteLimited2,BlackLimited3, BlueLimited3, GreenLimited3, GreyLimited3,MesquiteLimited3, PearlLimited3, RedLimited3, RockLimited3, SilverLimited3, WhiteLimited3,BlackLimited4, BlueLimited4, GreenLimited4, GreyLimited4,MesquiteLimited4, PearlLimited4, RedLimited4, RockLimited4, SilverLimited4, WhiteLimited4, BlackLimitedLongbed1, BlueLimitedLongbed1, GreenLimitedLongbed1, GreyLimitedLongbed1,MesquiteLimitedLongbed1, PearlLimitedLongbed1, RedLimitedLongbed1, RockLimitedLongbed1, SilverLimitedLongbed1, WhiteLimitedLongbed1, BlackLimitedLongbed2, BlueLimitedLongbed2, GreenLimitedLongbed2, GreyLimitedLongbed2,MesquiteLimitedLongbed2, PearlLimitedLongbed2, RedLimitedLongbed2, RockLimitedLongbed2, SilverLimitedLongbed2, WhiteLimitedLongbed2, BlackLimitedLongbed3, BlueLimitedLongbed3, GreenLimitedLongbed3, GreyLimitedLongbed3,MesquiteLimitedLongbed3, PearlLimitedLongbed3, RedLimitedLongbed3, RockLimitedLongbed3, SilverLimitedLongbed3, WhiteLimitedLongbed3,BlackLimitedLongbed4, BlueLimitedLongbed4, GreenLimitedLongbed4, GreyLimitedLongbed4,MesquiteLimitedLongbed4, PearlLimitedLongbed4, RedLimitedLongbed4, RockLimitedLongbed4, SilverLimitedLongbed4, WhiteLimitedLongbed4, InteriorLimited1, InteriorLimited2, InteriorLimited3, InteriorLimited4], price: 205000, cab: ["Regular (5.5ft)", "Long Box (6.5ft)"], photos: 10},
        {name: "Platinum Hybrid", colors: ["Midnight Black Metallic","Blueprint","Magnetic Grey Metallic","Wind Chill Pearl","Supersonic Red","Celestial Silver Metallic"], src: [BlackPlatinum1, BluePlatinum1, GreyPlatinum1, PearlPlatinum1, RedPlatinum1, SilverPlatinum1,BlackPlatinum2, BluePlatinum2, GreyPlatinum2, PearlPlatinum2, RedPlatinum2, SilverPlatinum2,BlackPlatinum3, BluePlatinum3, GreyPlatinum3, PearlPlatinum3, RedPlatinum3, SilverPlatinum3,BlackPlatinum4, BluePlatinum4, GreyPlatinum4, PearlPlatinum4, RedPlatinum4, SilverPlatinum4, BlackPlatinumLongbed1, BluePlatinumLongbed1, GreyPlatinumLongbed1, PearlPlatinumLongbed1, RedPlatinumLongbed1, SilverPlatinumLongbed1, BlackPlatinumLongbed2, BluePlatinumLongbed2, GreyPlatinumLongbed2, PearlPlatinumLongbed2, RedPlatinumLongbed2, SilverPlatinumLongbed2,BlackPlatinumLongbed3, BluePlatinumLongbed3, GreyPlatinumLongbed3, PearlPlatinumLongbed3, RedPlatinumLongbed3, SilverPlatinumLongbed3,BlackPlatinumLongbed4, BluePlatinumLongbed4, GreyPlatinumLongbed4, PearlPlatinumLongbed4, RedPlatinumLongbed4, SilverPlatinumLongbed4, InteriorPlatinum1,InteriorPlatinum2,InteriorPlatinum3,InteriorPlatinum4], price: 225000, cab: ["Regular (5.5ft)", "Long Box (6.5ft)"], photos: 6},
        {name: "1794 Hybrid TRD OFF ROAD", colors: ["Midnight Black Metallic","Blueprint", "Army Green","Magnetic Grey Metallic", "Smoked Mesquite", "Supersonic Red", "Celestial Silver Metallic"], src: [Black17941, Blue17941, Green17941, Grey17941, Mesquite17941, Red17941, Silver17941, Black17942, Blue17942, Green17942, Grey17942, Mesquite17942, Red17942, Silver17942, Black17943, Blue17943, Green17943, Grey17943, Mesquite17943, Red17943, Silver17943, Black17944, Blue17944, Green17944, Grey17944, Mesquite17944, Red17944, Silver17944, Black1794Longbed1, Blue1794Longbed1, Green1794Longbed1, Grey1794Longbed1, Mesquite1794Longbed1, Red1794Longbed1, Silver1794Longbed1, Black1794Longbed2, Blue1794Longbed2, Green1794Longbed2, Grey1794Longbed2, Mesquite1794Longbed2, Red1794Longbed2, Silver1794Longbed2, Black1794Longbed3, Blue1794Longbed3, Green1794Longbed3, Grey1794Longbed3, Mesquite1794Longbed3, Red1794Longbed3, Silver1794Longbed3, Black1794Longbed4, Blue1794Longbed4, Green1794Longbed4, Grey1794Longbed4, Mesquite1794Longbed4, Red1794Longbed4, Silver1794Longbed4, Interior17941, Interior17942,Interior17943,Interior17944], price: 245000, cab: ["Regular (5.5ft)", "Long Box (6.5ft)"],photos: 7},
        {name: "TRD PRO Hybrid", colors: ["Midnight Black Metallic","Lunar Rock","Solar Octane", "Ice Cap"], src: [BlackTRDPRO1, GreyTRDPRO1, SolarTRDPRO1, WhiteTRDPRO1,BlackTRDPRO2, GreyTRDPRO2, SolarTRDPRO2, WhiteTRDPRO2,BlackTRDPRO3, GreyTRDPRO3, SolarTRDPRO3, WhiteTRDPRO3,BlackTRDPRO4, GreyTRDPRO4, SolarTRDPRO4, WhiteTRDPRO4, InteriorTRDPRO1,InteriorTRDPRO2,InteriorTRDPRO3,InteriorTRDPRO4], price: 265000,photos: 4},
        {name: "Capstone Hybrid", colors: ["Midnight Black Metallic","Blueprint","Magnetic Grey Metallic","Wind Chill Pearl","Supersonic Red","Celestial Silver Metallic"], src: [BlackCapstone1, BlueCapstone1, GreyCapstone1, PearlCapstone1, RedCapstone1, SilverCapstone1, BlackCapstone2, BlueCapstone2, GreyCapstone2, PearlCapstone2, RedCapstone2, SilverCapstone2, BlackCapstone3, BlueCapstone3, GreyCapstone3, PearlCapstone3, RedCapstone3, SilverCapstone3,BlackCapstone4, BlueCapstone4, GreyCapstone4, PearlCapstone4, RedCapstone4, SilverCapstone4, InteriorCapstone1,InteriorCapstone2,InteriorCapstone3,InteriorCapstone4], price: 265000,photos: 6},
    ]

    const [price, setPrice] = useState(0);
    const [activeGrade, setActiveGrade] = useState(["Limited Hybrid TRD OFF ROAD",32000, 0]);
    const [activeColor, setActiveColor] = useState(["Midnight Black Metallic",100, 0]);
    const [activeBed, setActiveBed] = useState(0)
    const [activePicture, setActivePicture] = useState(0);
    const [selectionStage, setSelectionStage] = useState(0);
    const [mainImageSrc, setMainImageSrc] = useState(grades[activeGrade[2]].src[(activeColor[(2)]+activeBed*grades[activeGrade[2]].src.length-4/2)+(grades[activeGrade[2]].photos*activePicture)])
    

    


    //update price
    useEffect(() => {
        if (price !== grades[activeGrade[2]]){setPrice(grades[activeGrade[(2)]].price)};
        if (activeBed !== 0 && activeGrade[0] !== "Platinum Hybrid" && activeGrade[0] !== "1794 Hybrid TRD OFF ROAD" && activeGrade[0] !== "Limited Hybrid TRD OFF ROAD"){setActiveBed(0)};
        if (activePicture > 3){
            console.log(grades[activeGrade[2]].src.length)
            console.log("hello")
            setMainImageSrc(grades[activeGrade[2]].src[grades[activeGrade[2]].src.length - 8 + activePicture]);
        } else {
            setMainImageSrc(grades[activeGrade[2]].src[(activeColor[(2)]+(activeBed*(grades[activeGrade[2]].src.length -4)/2))+(grades[activeGrade[2]].photos*activePicture)]);
        }
    });
    if (isBrowser && window.innerWidth > 1050){
        // desktop page
  return (
        <Layout title="Build Your Tundra | Glacier International" hideFooter={true} invertNav={true}>
            <Helmet>
                <title>Build Your 2023 Toyota Tundra| Customise Toyota Tundra in NZ</title>
                <meta name='description' content='Experience the new 2023 Toyota Tundra, where luxury meets power. Customise your right-hand drive Toyota Tundra exclusively in NZ at Glacier International today!' />
            </Helmet>
            <Main style={pageStyles}>
                <PriceFinanceBar price={price}/>
                <Row>
                <MainImage src={mainImageSrc} activePicture={activePicture} updatePicture={(newPicture) => {setActivePicture(newPicture)}}/>
                    {/* <MainImage src={grades[activeGrade[2]].src[(activeColor[(2)]+activeBed*grades[activeGrade[2]].src.length/2)*activePicture]} activePicture={activePicture} updatePicture={(newPicture) => {setActivePicture(newPicture)}}/> */}
                    <FeatureBar grades={grades} activeGrade={activeGrade} activeColor={activeColor} updateActiveColor={(color) => {setActiveColor(color);}} updateActiveGrade={(grade) => {setActiveGrade(grade); setActiveColor(["Midnight Black Metallic",100, 0])}} activeBed={activeBed} updateActiveBed={(bed) => setActiveBed(bed)} price={price}/>
                </Row>
            </Main>
        </Layout>
  )
    } else if (isBrowser && window.innerWidth < 1050){
        // mobile page
        return (
            <Layout title="Build Your Tundra | Glacier International" hideFooter={true} invertNav={true}>
                <Main style={pageStyles}>
                    
                    {/* <MainImage src={grades[activeGrade[2]].src[activeColor[(2)]+activeBed*grades[activeGrade[2]].src.length/2]} /> */}
                    <MainImage src={mainImageSrc} activePicture={activePicture} updatePicture={(newPicture) => {setActivePicture(newPicture)}}/>
                    <PriceFinanceBar price={price}/>
                    <MobileSelectionTab activeGrade={activeGrade} selectionStage={selectionStage} updateSelectionStage={(newStageNumber) => {setSelectionStage(newStageNumber)}}/>
                    <MobileFeatureSection price={price} model="Tundra" selectionStage={selectionStage} grades={grades} activeGrade={activeGrade} activeColor={activeColor} updateActiveColor={(color) => {setActiveColor(color);}} updateActiveGrade={(grade) => {setActiveGrade(grade); setActiveColor(["Midnight Black Metallic",100, 0])}}  activeBed={activeBed} updateActiveBed={(bed) => {setActiveBed(bed)}}/>
                </Main>
            </Layout>
        )
    } else { return (
        <div>Loading...</div>
    )}
}

export default IndexPage