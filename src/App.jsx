import { useState } from "react";
import img1 from "./assets/Frame 38498.png";

import logo from "./assets/logo1.svg";
import star from "./assets/Star 12.svg";
import vector from "./assets/Vector.png";
import frame38469 from "./assets/Frame 38469.svg";
import maskGroup from "./assets/Mask group.png";
import rectangle11 from "./assets/Rectangle 11.svg";
import rectangle10 from "./assets/Rectangle 10.png";
import frame140 from "./assets/Frame 140.png";
import Frame10 from "./assets/Frame 10.png";
import Frame11 from "./assets/Dropbox_logo_2017 1.png";
import Frame12 from "./assets/Frame 38577.png";
import Frame13 from "./assets/Group.png";
import Frame14 from "./assets/Layer_2 (1).png";
import Frame15 from "./assets/Layer_2.png";
import Frame16 from "./assets/Ellipse 378.png";
import Frame78 from "./assets/Frame 78.png";

import hotelBooking from "./assets/Hotel boking.png";
import appImage from "./assets/অ্যাপ.png";
import frame38569 from "./assets/Frame38569.png";
import frame186 from "./assets/Frame 186.svg";
import socialIcons from "./assets/Frame 38594.png";
import frame38576 from "./assets/Frame 38576.svg";

import frame1 from "./assets/Frame 38509.png";
import frame2 from "./assets/Frame 38512.png";
import frame3 from "./assets/Frame 38511.png";
import frame4 from "./assets/Frame 38508.png";
import frame5 from "./assets/Frame 38498.png";
import frame6 from "./assets/Frame 38498 (1).png";
import frame7 from "./assets/Frame 38498 (2).png";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

let arrCarts = [
  {
    id: "1",
    img: img1,
    name: "Product Management",
    des: "vacancy available 20",
    status: true,
  },
  {
    id: "2",
    img: frame1,
    name: "Web & Mobile Development",
    des: "vacancy available 20",
    status: true,
  },
  {
    id: "3",
    img: frame2,
    name: "Brochures & Flyers",
    des: "vacancy available 20",
    status: true,
  },
  {
    id: "4",
    img: frame3,
    name: "Logo & name cards",
    des: "vacancy available 20",
    status: true,
  },
  {
    id: "5",
    img: frame4,
    name: "Marketing &  Commuication",
    des: "vacancy available 20",
    status: false,
  },
  {
    id: "6",
    img: frame5,
    name: "Business Development",
    des: "vacancy available 20",
    status: false,
  },
  {
    id: "7",
    img: frame6,
    name: "Human Resources",
    des: "vacancy available 20",
    status: false,
  },
  {
    id: "8",
    img: frame7,
    name: "Infographics & Illustrations",
    des: "vacancy available 20",
    status: false,
  },
];

import "./App.css";

import { useRef } from "react";

function App() {
  const [carts, setCarts] = useState(arrCarts);

  const scrollRef = useRef(null);
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  };
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  function delCart(id) {
    let delcarts = carts.filter((e) => e.id !== id);
    setCarts(delcarts);
  }

  let [inpSearch, setInpSearch] = useState("");
  let [inpStatus, setinpStatus] = useState("all");

  let [addName, setaddName] = useState("");
  let [addImg, setaddImg] = useState("");
  let [addDes, setaddDes] = useState("");
  let [addStatus, setaddStatus] = useState(true);
  function addCarts() {
    let newUser = {
      id: Date.now(),
      img: addImg,
      name: addName,
      des: addDes,
      status: addStatus,
    };

    setCarts([...carts, newUser]);
    handleClose();
  }

  const [edit, setedit] = useState(false);
  const handleCloseedit = () => {
    setedit(false);
  };

  let [editName, seteditName] = useState("");
  let [editImg, seteditImg] = useState("");
  let [editDes, seteditDes] = useState("");
  let [editStatus, seteditStatus] = useState(true);
  let [idx, setIdx] = useState(null);

  function openeditmodal(e) {
    setedit(true);
    seteditName(e.name);
    seteditImg(e.img);
    seteditDes(e.des);
    seteditStatus(e.status);
    setIdx(e.id);
  }

  function editCarts() {
    let update = carts.map((e) => {
      if (idx == e.id) {
        return {
          ...e,
          img: editImg,
          name: editName,
          des: editDes,
          status: editStatus,
        };
      }
      return e;
    });

    setCarts(update);
    handleCloseedit();
  }

  return (
    <div className="relative font-sans text-white">
      <div className=" bg-[#101C26]  w-full h-[955px]">
        <div className="mx-auto flex justify-between items-center w-[90%] py-8">
          <img src={logo} alt="logo" />
          <nav className="flex gap-8">
            <a href="#" className="pb-2 border-b border-white">
              Home
            </a>
            <a href="#" className="text-safed">
              Project
            </a>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </nav>
          <div className="flex gap-5">
            <button className="text-[#CECECE] text-lg">Sign in</button>
            <button className="text-lg">Sign up</button>
          </div>
        </div>
        <div className="relative mx-auto flex w-[90%] py-8">
          <div className="w-1/2 pt-[50px]">
            <h1 className="text-[70px] font-bold text-white">
              We’re a Creative Design Agency
            </h1>
            <p className="text-[24px] pt-[20px] pb-[20px] text-zard">
              We are delivering top level digital services{" "}
              <img className="inline-block ml-[50px]" src={star} alt="star" />
              <br />
              best experienced team, just get started
            </p>
            <div className="flex items-center gap-[20px]">
              <button className=" bg-yellow-300 text-black px-6 py-3 rounded">
                Get Started{" "}
                <img
                  className="inline-block ml-[10px]"
                  src={vector}
                  alt="arrow"
                />
              </button>
              <img src={frame38469} alt="frame" />
              <p className="text-white">How it works</p>
            </div>
            <div className="flex justify-center gap-[20px] mt-[80px] mb-[80px]">
              <div className="text-center">
                <p className="text-[44px] font-semibold text-zard">20%</p>
                <p className="text-[18px] font-normal text-white">
                  Years of Excellent
                </p>
              </div>
              <div className="text-center">
                <p className="text-[44px] font-semibold text-zard">90%</p>
                <p className="text-[18px] font-normal text-white">
                  Happy Client
                </p>
              </div>
              <div className="text-center">
                <p className="text-[44px] font-semibold text-zard">80%</p>
                <p className="text-[18px] font-normal text-white">
                  Project Success
                </p>
              </div>
            </div>
          </div>
          <img
            src={frame38576}
            alt="hero-img"
            className="absolute w-[700px] ml-[589px]"
          />
        </div>
        <div className="mx-auto flex justify-between items-center w-[90%] pt-[0px]">
          <img src={Frame10} alt="" />
          <img src={Frame11} alt="" />
          <img src={Frame12} alt="" />
          <img src={Frame13} alt="" />
          <img src={Frame14} alt="" />
          <img src={Frame15} alt="" />
        </div>
      </div>

      <img
        src={maskGroup}
        alt=""
        className="absolute left-[30px] top-[1416px] -z-10"
      />
      <section className="mx-auto w-[90%] py-[150px] flex gap-[40px]">
        <img src={rectangle11} alt="" />
        <div className="flex flex-col items-start gap-[40px]">
          <p className="inline-block text-[18px] font-normal text-[#24272E]  bg-yellow-300/20 rounded-full px-3 py-1">
            About us
          </p>
          <h2 className="text-[44px] font-semibold text-[#24272E]">
            We are skilled in providing superior services
          </h2>
          <span className="text-[24px] text-[#555C68]">
            Customer satisfaction is such a key part of many successful
            businesses. Most companies have
          </span>
          <button className="flex items-center text-[#101C26] font-semibold text-[18px]">
            Read More <img className="ml-[10px]" src={vector} alt="" />
          </button>
        </div>
      </section>

      <img
        src={maskGroup}
        alt=""
        className="absolute right-[30px] top-[2416px] -z-10"
      />
      <section className="mx-auto w-[90%] py-[150px] flex gap-[40px]">
        <div className="flex flex-col items-start gap-[40px]">
          <p className="inline-block text-[18px] font-normal text-[#24272E]  bg-yellow-300/20 rounded-full px-3 py-1">
            Why choose us
          </p>
          <h2 className="text-[44px] font-semibold text-[#24272E]">
            Expert advising clients On financial challenges
          </h2>
          <span className="text-[24px] text-[#555C68]">
            Customer satisfaction is such a key part of many successful
            businesses. Most companies ...
          </span>
          <div>
            <div className="flex items-center gap-[20px] py-2.5">
              <img className="h-[68px]" src={frame140} alt="process" />
              <div>
                <h3 className="text-[20px] font-semibold text-black">
                  First working process
                </h3>
                <p className="text-[18px] font-normal text-[#555C68] pt-[15px]">
                  Customer satisfaction is such a key part of many successful
                  businesses.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[20px] py-2.5">
              <img className="h-[68px]" src={frame140} alt="process" />
              <div>
                <h3 className="text-[20px] font-semibold text-black">
                  First working process
                </h3>
                <p className="text-[18px] font-normal text-[#555C68] pt-[15px]">
                  Customer satisfaction is such a key part of many successful
                  businesses.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[20px] py-2.5">
              <img className="h-[68px]" src={frame140} alt="process" />
              <div>
                <h3 className="text-[20px] font-semibold text-black">
                  First working process
                </h3>
                <p className="text-[18px] font-normal text-[#555C68] pt-[15px]">
                  Customer satisfaction is such a key part of many successful
                  businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src={rectangle10} alt="" />
      </section>

      <section>
        <div className=" flex justify-between items-center w-full m-auto px-32 py-3 bg-white border border-gray-300 ">
          <select
            value={inpStatus}
            onChange={(e) => setinpStatus(e.target.value)}
            className="border py-1 px-2 border-[#1976d2] rounded text-[#1976d2] outline-none"
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="inactive">Inctive</option>
          </select>
          <input
            type="text"
            placeholder="Search..."
            value={inpSearch}
            onChange={(e) => setInpSearch(e.target.value)}
            className="w-[400px] border py-1 px-2 border-[#1976d2] text-[#1976d2] rounded placeholder:text-[#1976d2] outline-none"
          />
          <Button variant="outlined" onClick={handleClickOpen}>
            Add New Cart
          </Button>
        </div>

        {/* add */}
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Add New Carts"}</DialogTitle>
          <DialogContent>
            {/* <DialogContentText id="alert-dialog-description"> */}
            <div className="flex flex-col gap-2">
              <input
                className="border rounded p-1.5"
                type="text"
                placeholder="Name"
                value={addName}
                onChange={(e) => setaddName(e.target.value)}
              />
              <input
                className="border rounded p-1.5"
                type="text"
                placeholder="Descrip"
                value={addDes}
                onChange={(e) => setaddDes(e.target.value)}
              />
              <input
                className="border rounded p-1.5"
                type="text"
                placeholder="Img Url"
                value={addImg}
                onChange={(e) => setaddImg(e.target.value)}
              />
              <select
                value={addStatus ? "active" : "inactive"}
                onChange={(e) => setaddStatus(e.target.value == "active")}
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            {/* </DialogContentText> */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={addCarts} autoFocus>
              Save
            </Button>
          </DialogActions>
        </Dialog>

        {/* edit */}
        <Dialog
          open={edit}
          onClose={handleCloseedit}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Edit Carts"}</DialogTitle>
          <DialogContent>
            {/* <DialogContentText id="alert-dialog-description"> */}
            <div className="flex flex-col gap-2">
              <input
                className="border rounded p-1.5"
                type="text"
                placeholder="Name"
                value={editName}
                onChange={(e) => seteditName(e.target.value)}
              />
              <input
                className="border rounded p-1.5"
                type="text"
                placeholder="Descrip"
                value={editDes}
                onChange={(e) => seteditDes(e.target.value)}
              />
              <input
                className="border rounded p-1.5"
                type="text"
                placeholder="Img Url"
                value={editImg}
                onChange={(e) => seteditImg(e.target.value)}
              />
              <select
                value={editStatus ? "active" : "inactive"}
                onChange={(e) => seteditStatus(e.target.value == "active")}
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            {/* </DialogContentText> */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseedit}>Cancel</Button>
            <Button onClick={editCarts} autoFocus>
              Save
            </Button>
          </DialogActions>
        </Dialog>

        <div className="p-20 flex flex-wrap  gap-7 px-24 ">
          {carts
            .filter((e) => {
              const nameMatch = e.name
                .toLowerCase()
                .includes(inpSearch.toLowerCase());

              const statusMatch =
                inpStatus === "all" ||
                (inpStatus === "active" && e.status) ||
                (inpStatus === "inactive" && !e.status);

              return nameMatch && statusMatch;
            })
            .map((e) => {
              return (
                <div
                  key={e.id}
                  className="flex flex-col justify-between w-[23%] p-7 rounded-xl shadow bg-white"
                >
                  <div>
                    <img
                      className="rounded-full w-14 h-14 object-cover"
                      src={e.img}
                      alt=""
                    />
                    <div className="text-black text-[24px] font-semibold leading-[23px] py-4">
                      {e.name && e.name.trim() ? e.name : "no name"}
                    </div>

                    <div className="text-[18px] text-gray-400">
                      {e.des && e.des.trim() ? e.des : "no description"}
                    </div>
                    <p className="text-[18px] text-black">
                      {e.status ? "Active" : "Inactive"}
                    </p>
                  </div>

                  <div className="flex justify-between pt-2.5">
                    <button
                      onClick={() => openeditmodal(e)}
                      className=" border py-1 w-2/5 border-[#1976d2] rounded text-[#1976d2] outline-none hover:bg-blue-50"
                    >
                      edit
                    </button>
                    <button
                      onClick={() => delCart(e.id)}
                      className="border py-1 w-2/5 border-[#1976d2] rounded text-[#1976d2] outline-none hover:bg-blue-50 "
                    >
                      delete
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </section>

      <section className="py-[100px] w-[90%] mx-[105px]">
        <div className="flex justify-between items-center">
          <div>
            <p className="inline-block text-[18px] font-normal text-[#24272E]  bg-yellow-300/20 rounded-full px-3 py-1">
              Ready To Use
            </p>
            <h2 className="text-[44px] font-semibold text-[#24272E] py-[30px]">
              Elegant And Impressive Inner Pages
            </h2>
          </div>

          <div className="flex gap-2">
            <button
              className="text-black border rounded-[50%] p-2"
              onClick={() => scrollLeft()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              className="text-black border rounded-[50%] p-2"
              onClick={() => scrollRight()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          ref={scrollRef}
          style={{ scrollBehavior: "smooth" }}
          className="flex overflow-hidden gap-5 py-[40px]"
        >
          <div className="w-1/3 basis-auto shrink-0 grow-0 ">
            <img src={hotelBooking} alt="hotel booking" />
            <h3 className="text-[36px] font-medium py-3">
              Hotel Booking Website
            </h3>
            <p className="text-[20px] text-[#555C68] pb-[20px]">
              Business owners and managers lead by example. The values and work
              ethic displayed by a
            </p>
            <a
              href="#"
              className="text-[20px] font-semibold text-[#24272E] inline-flex items-center"
            >
              Read Case Study{" "}
              <img className="ml-[10px]" src={vector} alt="arrow" width="18" />
            </a>
          </div>
          <div className="w-1/3 basis-auto shrink-0 grow-0 ">
            <img src={appImage} alt="app" />
            <h3 className="text-[36px] font-medium py-3">
              App Interface Design
            </h3>
            <p className="text-[20px] text-[#555C68] pb-[20px]">
              Business owners and managers lead by example. The values and work
              ethic displayed by a
            </p>
            <a
              href="#"
              className="text-[20px] font-semibold text-[#24272E] inline-flex items-center"
            >
              Read Case Study{" "}
              <img className="ml-[10px]" src={vector} alt="arrow" width="18" />
            </a>
          </div>
          <div className="w-1/3 basis-auto shrink-0 grow-0 ">
            <img src={appImage} alt="app" />
            <h3 className="text-[36px] font-medium py-3">
              App Interface Design
            </h3>
            <p className="text-[20px] text-[#555C68] pb-[20px]">
              Business owners and managers lead by example. The values and work
              ethic displayed by a
            </p>
            <a
              href="#"
              className="text-[20px] font-semibold text-[#24272E] inline-flex items-center"
            >
              Read Case Study{" "}
              <img className="ml-[10px]" src={vector} alt="arrow" width="18" />
            </a>
          </div>
        </div>
      </section>

      <section className="text-center py-[50px] bg-[#f6f6f6f6]">
        <p className="inline-block text-[18px] font-normal text-[#24272E]  bg-yellow-300/20 rounded-full px-3 py-1">
          TESTIMONIALs
        </p>
        <h2 className="text-[44px] font-semibold text-[#24272E] py-[30px]">
          Client’s Kind Words
        </h2>
        <span className="text-[18px] text-[#555C68]">
          Business owners and managers lead by example. The values
        </span>
        <div>
          <div className="flex gap-10 overflow-hidden ">
            <div className="max-w-md mx-auto whitespace-normal basis-auto shrink-0 grow-0 bg-white rounded-lg overflow-hidden shadow-md p-10 my-10 flex flex-col items-center">
              <img
                src={Frame16}
                alt="Brooklyn Simmons"
                className=" object-cover"
              />

              <h2 className="text-xl font-bold text-gray-800">
                Brooklyn Simmons
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                Co-Founder & Chief Executive Officer
              </p>

              <img src={Frame78} alt="" />

              <p className="text-gray-700 text-sm py-2.5">
                66 Amet minim mollit non deserunt ullamco est sit aliqua dolor
                do amet sint. Velit officia consequat duis enim velit mollit.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
            <div className="max-w-md mx-auto whitespace-normal basis-auto shrink-0 grow-0 bg-white rounded-lg overflow-hidden shadow-md p-10 my-10 flex flex-col items-center">
              <img
                src={Frame16}
                alt="Brooklyn Simmons"
                className=" object-cover"
              />

              <h2 className="text-xl font-bold text-gray-800">
                Brooklyn Simmons
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                Co-Founder & Chief Executive Officer
              </p>

              <img src={Frame78} alt="" />

              <p className="text-gray-700 text-sm py-2.5">
                66 Amet minim mollit non deserunt ullamco est sit aliqua dolor
                do amet sint. Velit officia consequat duis enim velit mollit.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
            <div className="max-w-md mx-auto whitespace-normal basis-auto shrink-0 grow-0 bg-white rounded-lg overflow-hidden shadow-md p-10 my-10 flex flex-col items-center">
              <img
                src={Frame16}
                alt="Brooklyn Simmons"
                className=" object-cover"
              />

              <h2 className="text-xl font-bold text-gray-800">
                Brooklyn Simmons
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                Co-Founder & Chief Executive Officer
              </p>

              <img src={Frame78} alt="" />

              <p className="text-gray-700 text-sm py-2.5">
                66 Amet minim mollit non deserunt ullamco est sit aliqua dolor
                do amet sint. Velit officia consequat duis enim velit mollit.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
          </div>

          <div className="flex justify-center ">
            <img
              className=" pb-[150px]"
              src={frame38569}
              alt="testimonial image"
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-white text-[#101C26] py-[100px]">
        <div className="w-[80%] mx-auto flex justify-evenly">
          <div className="w-1/2">
            <p className="inline-block text-[18px] font-normal text-[#24272E]  bg-yellow-300/20 rounded-full px-3 py-1">
              OUR CONTACTS
            </p>
            <h2 className="text-[35px] font-semibold text-[#24272E] py-[30px]">
              Let’s Start Working Together. Get in Touch with Us
            </h2>
            <span className="text-[18px] text-[#555C68]">
              Get in touch to discuss your employee wellbeing needs today.
              Please give us a call, drop us an email.
            </span>
            <img
              className="pt-[30px]"
              src={frame186}
              alt="contact illustration"
            />
          </div>
          <div className="w-1/2 flex flex-col justify-center">
            <form className="w-[80%] mx-auto flex flex-col text-white">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-[#101C26] p-5 my-2 rounded"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-[#101C26] p-5 my-2 rounded"
              />
              <input
                type="url"
                placeholder="Website"
                className="bg-[#101C26] p-5 my-2 rounded"
              />
              <input
                type="text"
                placeholder="Tell About Your Project"
                className="bg-[#101C26] p-5 my-2 rounded"
              />
              <button className=" bg-yellow-300 text-black py-3 rounded mt-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-[#101C26] text-white py-12">
        <div className="w-[80%] mx-auto flex justify-around">
          <div className="w-1/5">
            <img src={logo} alt="logo" className="w-12" />
            <p className="mt-4 text-[#ECECEC]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat ut wisi enim ad minim
            </p>
            <img src={socialIcons} alt="social icons" className="mt-4 w-20" />
          </div>
          <div>
            <p className="font-semibold">Product</p>
            {[
              "Connections",
              "Protocols",
              "Personas",
              "Integrations",
              "Catalog",
              "Pricing",
              "Security",
              "GDPR",
            ].map((item) => (
              <a key={item} href="#" className="block text-[#ECECEC] my-1">
                {item}
              </a>
            ))}
          </div>
          <div>
            <p className="font-semibold">For Developers</p>
            {["Docs", "API", "Open Source", "Engineering Team"].map((item) => (
              <a key={item} href="#" className="block text-[#ECECEC] my-1">
                {item}
              </a>
            ))}
          </div>
          <div>
            <p className="font-semibold">Company</p>
            {["Careers", "Blog", "Press"].map((item) => (
              <a key={item} href="#" className="block text-[#ECECEC] my-1">
                {item}
              </a>
            ))}
          </div>
          <div>
            <p className="font-semibold">Support</p>
            {[
              "Help Center",
              "Contact Us",
              "Security",
              "Bulletins",
              "Documentation",
              "Partner",
              "Portal",
            ].map((item) => (
              <a key={item} href="#" className="block text-[#ECECEC] my-1">
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
