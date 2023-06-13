import { useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Second from "./second/index";
import "./styles.css";
import twoone from "../../assets/Teams/Second/AbhishekVerma.jpg";
import twotwo from "../../assets/Teams/Second/AyushTripathi.jpg";
import twothree from "../../assets/Teams/Second/HimanshiTripathi.jpg";
import twofour from "../../assets/Teams/Second/IshitaSinghal.jpg";
import twofive from "../../assets/Teams/Second/RajGautam.jpg";
import twosix from "../../assets/Teams/Second/RajiGupta.jpg";
import twoseven from "../../assets/Teams/Second/ShabdSahay.jpg";
import twoeight from "../../assets/Teams/Second/SiddhantMangal.jpg";
import twonine from "../../assets/Teams/Second/SnehaVasishth.jpg";
import twoten from "../../assets/Teams/Second/VinayakSharma.jpg";
import Third from "./third/index";
import threeone from "../../assets/Teams/Third/AbhinavVerma.jpg";
import threetwo from "../../assets/Teams/Third/ArjunRaja.jpg";
import threethree from "../../assets/Teams/Third/HarshTripathi.jpg";
import threefour from "../../assets/Teams/Third/MohdAnas.jpg";
import threefive from "../../assets/Teams/Third/PrashantTripathi.jpg";
import threesix from "../../assets/Teams/Third/SajalJain.jpg";
import threeseven from "../../assets/Teams/Third/ShambhaviKhare.jpeg";
import threeeight from "../../assets/Teams/Third/ShivamTomar.jpg";
import threenine from "../../assets/Teams/Third/StutiAgarwal.jpg";
import threeten from "../../assets/Teams/Third/VaibhavJaiswal.jpg";
import Fourth from "./fourth/index";
import fourone from "../../assets/Teams/Fourth/Anusha.jpeg";
import fourtwo from "../../assets/Teams/Fourth/Anushka.jpeg";
import fourthree from "../../assets/Teams/Fourth/Garvit.jpeg";
import fourfour from "../../assets/Teams/Fourth/himanshu.jpg";
import fourfive from "../../assets/Teams/Fourth/Ishank.jpeg";
import foursix from "../../assets/Teams/Fourth/KshitRaj.jpeg";
import fourseven from "../../assets/Teams/Fourth/Manas.jpeg";
import foureight from "../../assets/Teams/Fourth/shivangi-ch.jpeg";
import fournine from "../../assets/Teams/Fourth/shivangi-singh.jpeg";

export const Teams = () => {

    const second = [
        {
            image : twoone,
            name: "Abhishek Verma",
            domain: "Designer",
            desc: " ",
            linkedIn: "",
            twitter: ""
        },
        {
            image : twotwo,
            name : "Ayush Tripathi",
            domain : "App Developer",
            desc: "",
            linkedIn: "",
            twitter: ""
        },
        {
            image : twothree,
            name : "Himanshi Tripathi",
            domain : "App Developer",
            desc: "",
            linkedIn: "",
            twitter: ""
        },
        {
            image : twofour,
            name : "Ishita Singhal",
            domain : "Web Developer",
            desc: "",
            linkedIn: "",
            twitter: ""
        },
        {
            image : twofive,
            name : "Raj Gautam",
            domain : "Designer",
            desc: "",
            linkedIn: "",
            twitter: ""
        },
        {
            image : twosix,
            name : "Raji Gupta",
            domain : "Web Developer",
            desc : "",
            linkedIn: "",
            twitter: ""
        },
        {
            image : twoseven,
            name: "Shabd Sahay",
            domain: "Web Developer",
            desc: "",
            linkedIn: "",
            twitter: ""
        },
        {
            image: twoeight,
            name: "Siddhant Mangal",
            domain: "Designer",
            desc : "",
            linkedIn: "",
            twitter: ""
        },
        {
            image: twonine,
            name: "Sneha Vasishth",
            domain: "Machine Learning",
            desc: "",
            linkedIn: "",
            twitter: ""
        },
        {
            image: twoten,
            name: "Vinayak Sharma",
            domain: "Web Developer",
            desc: "",
            linkedIn: "",
            twitter: ""
        },
        
    ]

    const third = [
        {
            image: threeone,
            name: "Abhinav Verma",
            domain:"",
            desc:"",
            linkedIn:"",
            twitter:""
        },
        {
            image: threetwo,
            name: "Arjun Raja",
            domain:"",
            desc:"",
            linkedIn:"",
            twitter:""
        },
        {
            image: threethree,
            name: "Harsh Tripathi",
            domain:"",
            desc:"",
            linkedIn:"",
            twitter:""
        },
        {
            image: threefour,
            name: "Mohd Anas",
            domain:"",
            desc:"",
            linkedIn:"",
            twitter:""
        },
        {
            image: threefive,
            name: "Prashant Tripathi",
            domain:"",
            desc:"",
            linkedIn:"",
            twitter:""
        },
        {
            image: threesix,
            name: "Sajal Jain",
            domain:"",
            desc:"",
            linkedIn:"",
            twitter:""
        },
        {
            image: threeseven,
            name: "Shambhavi Khare",
            domain:"",
            desc:"",
            linkedIn:"",
            twitter:""
        },
        {
            image: threeeight,
            name: "Shivam Tomar",
            domain:"",
            desc:"",
            linkedIn:"",
            twitter:""
        },
        {
            image: threenine,
            name: "Stuti Agarwal",
            domain:"",
            desc:"",
            linkedIn:"",
            twitter:""
        },
        {
            image: threeten,
            name: "Vaibhav Jaiswal",
            domain:"",
            desc:"",
            linkedIn:"",
            twitter:""
        }
    ]

    const fourth = [
        {
            image: fourone,
            name: "Anusha",
            domain:"",
            desc:"",
            linkedIn:"",
            twitter:""
        },
        {
            image: fourtwo,
            name: "Anushka",
            domain:"",
            desc:"",
            linkedIn:"",
            twitter:""
        },
        {
            image: fourthree,
            name: "Garvit",
            domain:"",
            desc:"",
            linkedIn:"",
            twitter:""
        },
        {
            image: fourfour,
            name: "Himanshu",
            domain:"",
            desc:"",
            linkedIn:"",
            twitter:""
        },
        {
            image: fourfive,
            name: "Ishank",
            domain:"",
            desc:"",
            linkedIn:"",
            twitter:""
        },
        {
            image: foursix,
            name: "Kshit Raj",
            domain:"",
            desc:"",
            linkedIn:"",
            twitter:""
        },
        {
            image: fourseven,
            name: "Manas",
            domain:"",
            desc:"",
            linkedIn:"",
            twitter:""
        },
        {
            image: foureight,
            name: "Shivangi",
            domain:"",
            desc:"",
            linkedIn:"",
            twitter:""
        },
        {
            image: fournine,
            name: "Shivangi Singh",
            domain:"",
            desc:"",
            linkedIn:"",
            twitter:""
        }
    ]

    return(
        <div>
      <Carousel>
        <div>
          <Second second={second} />
        </div>
        <div>
          <Third third={third} />
        </div>
        <div>
          <Fourth fourth={fourth} />
        </div>
      </Carousel>
    </div>
    )
};
