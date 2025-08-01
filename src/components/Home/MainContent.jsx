import {
    Button,
    Card,
    Input,
    Carousel,
    Col,
    Row,
    Statistic,
    Slider,
    InputNumber,
    Checkbox,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import CountUp from "react-countup";
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Import Card.Meta explicitly
const { Meta: CardMeta } = Card;

// Formatter for CountUp component
const formatter = (value) => <CountUp end={value} separator="," />;

// Animation variants
const slideUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
};

// Sample data for flats
const flats = [
    {
        id: 1,
        title: "Flat in Shivaji Nagar",
        location: "Shivaji Nagar",
        price: "₹30000/month",
        description: "A spacious flat with modern amenities.",
        image: "https://th.bing.com/th/id/R.bf3f2f0ab470b6ae0acd69d3366b8e71?rik=zDfPdp%2fp8597XA&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f10%2fPhotos-Apartment-HD.jpg&ehk=68xff7gTwc8dN2zuON1jZ0soOcByscrd6C9hwSszjyw%3d&risl=&pid=ImgRaw&r=0",
        amenities: ["WiFi", "AC", "Furnished"],
        tags: ["2 Bedrooms", "1 Bathroom", "Kitchen"],
    },
    {
        id: 2,
        title: "Flat in Kothrud",
        location: "Kothrud",
        price: "₹19000/month",
        description: "A cozy flat in a prime location with all facilities.",
        image: "https://www.phillyaptrentals.com/wp-content/uploads/2020/12/apartment-building-what-makes-good-apartment-building-scaled.jpg",
        amenities: ["WiFi", "Washer", "Pet-friendly"],
        tags: ["1 Bedroom", "1 Bathroom", "Balcony"],
    },
    {
        id: 3,
        title: "Flat in Viman Nagar",
        location: "Viman Nagar",
        price: "₹20000/month",
        description: "A modern flat with a balcony and gym access.",
        image: "https://static.giggster.com/images/location/ca5202c1-854f-4eb2-83c0-635c5f1e01e4/d859ba35-e9fa-474f-8b44-dfe8ae061b22/full_hd_retina.jpeg",
        amenities: ["Balcony", "Gym", "Parking"],
        tags: ["1 Bedroom", "1 Bathroom", "Kitchen"],
    },
    {
        id: 4,
        title: "Flat in Hinjawadi Phase 2",
        location: "Hinjawadi Phase 2",
        price: "₹25000/month",
        description: "A luxurious flat with a pool and garden.",
        image: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.glenwoodnyc.com/wp-content/uploads/2022/05/2-JSP-LOBBY-01-02-1280.jpg",
        amenities: ["WiFi", "Dishwasher", "Central Heating"],
        tags: ["3 Bedrooms", "2 Bathrooms", "Swimming Pool"],
    },
];

// Sample data for roommates
const roommates = [
    {
        name: "Mangesh Honrao",
        preferences: "Non-smoker, Quiet, Works remotely",
        details: ["25 years old", "Loves hiking", "No pets"],
    },
    {
        name: "Abhishek Kapadnis",
        preferences: "Pet-friendly, Social, Clean",
        details: ["28 years old", "Has a cat", "Enjoys cooking"],
    },
    {
        name: "Sarang Patil",
        preferences: "Night owl, Gamer, Tidy",
        details: ["30 years old", "No pets", "Freelancer"],
    },
    {
        name: "Trupti Gupta",
        preferences: "Early riser, Fitness enthusiast, Organized",
        details: ["27 years old", "Vegan", "No smoking"],
    },
];

const MainContent = ({ isDarkMode }) => {
    // State for budget range
    const [budgetRange, setBudgetRange] = useState([3500, 30000]);
    const navigate = useNavigate();

    // Handle slider change
    const handleSliderChange = (value) => {
        setBudgetRange(value);
    };

    // Handle min budget input change
    const handleMinInputChange = (value) => {
        if (value >= 3500 && value <= budgetRange[1]) {
            setBudgetRange([value, budgetRange[1]]);
        }
    };

    // Handle max budget input change
    const handleMaxInputChange = (value) => {
        if (value <= 30000 && value >= budgetRange[0]) {
            setBudgetRange([budgetRange[0], value]);
        }
    };

    return (
        <div
            className={
                isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
            }
            style={{
                maxWidth: "100%",
                margin: "0 auto",
                padding: "0 16px",
                boxSizing: "border-box",
            }}
        >
            {/* Statistics and Carousel Section - No Framer Motion */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <Card
                    title={
                        <span
                            className="text-2xl md:text-3xl font-semibold"
                            style={{
                                fontFamily: "Roboto",
                                fontWeight: "bold",
                                color: isDarkMode ? "#fff" : "#000",
                            }}
                        >
                            Statistics
                        </span>
                    }
                    variant="outlined"
                    className="h-full"
                    style={{ background: isDarkMode ? "#2f2f2f" : "#fff" }}
                >
                    <Row gutter={16}>
                        <Col span={12}>
                            <Statistic
                                title="Total Listings"
                                value={1234}
                                formatter={formatter}
                                style={{
                                    fontFamily: "Roboto",
                                    color: isDarkMode ? "#fff" : "#000",
                                }}
                            />
                        </Col>
                        <Col span={12}>
                            <Statistic
                                title="Total Users"
                                value={500}
                                precision={2}
                                formatter={formatter}
                                style={{
                                    fontFamily: "Roboto",
                                    color: isDarkMode ? "#fff" : "#000",
                                }}
                            />
                        </Col>
                        <Col span={12}>
                            <Statistic
                                title="Total Searches"
                                value={100}
                                precision={2}
                                formatter={formatter}
                                style={{
                                    fontFamily: "Roboto",
                                    paddingTop: "16px",
                                    color: isDarkMode ? "#fff" : "#000",
                                }}
                            />
                        </Col>
                    </Row>
                </Card>
                <div className="sm:col-span-2">
                    <Card
                        variant="outlined"
                        className="h-full"
                        style={{ background: isDarkMode ? "#2f2f2f" : "#fff" }}
                    >
                        <Carousel autoplay dotPosition="bottom">
                            {flats.slice(0, 4).map((flat, index) => (
                                <div key={index}>
                                    <div className="text-center">
                                        <h3
                                            className="text-xl md:text-3xl mb-2 font-bold"
                                            style={{
                                                color: isDarkMode
                                                    ? "#fff"
                                                    : "#000",
                                            }}
                                        >
                                            {flat.title}
                                        </h3>
                                        <img
                                            src={flat.image}
                                            alt={`flat-${index}`}
                                            style={{
                                                width: "100%",
                                                maxHeight: "250px",
                                                objectFit: "cover",
                                                borderRadius: "8px",
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </Card>
                </div>
            </div>

            {/* Filters and Listings Section */}
            <div className="flex gap-4 flex-col md:flex-row">
                <div className="w-full md:w-1/4 mb-6 md:mb-0">
                    <h3
                        className="mb-2 text-2xl md:text-4xl"
                        style={{
                            fontFamily: "Roboto",
                            color: isDarkMode ? "#fff" : "#000",
                        }}
                    >
                        Filters
                    </h3>
                    <div className="flex flex-col gap-2">
                        <p
                            style={{
                                color: isDarkMode ? "#d1d5db" : "#6b7280",
                            }}
                            className="text-lg font-semibold"
                        >
                            Budget Range
                        </p>
                        <Slider
                            range
                            min={3500}
                            max={30000}
                            value={budgetRange}
                            onChange={handleSliderChange}
                            step={100}
                            tooltip={{
                                formatter: (value) => `₹${value}`,
                            }}
                        />
                        <div className="flex gap-2">
                            <InputNumber
                                min={3500}
                                max={budgetRange[1]}
                                value={budgetRange[0]}
                                onChange={handleMinInputChange}
                                formatter={(value) => `₹ ${value}`}
                                parser={(value) => value.replace("₹ ", "")}
                                style={{ flex: 1 }}
                            />
                            <InputNumber
                                min={budgetRange[0]}
                                max={30000}
                                value={budgetRange[1]}
                                onChange={handleMaxInputChange}
                                formatter={(value) => `₹ ${value}`}
                                parser={(value) => value.replace("₹ ", "")}
                                style={{ flex: 1 }}
                            />
                        </div>
                        <Input placeholder="City / Area" />
                        <div>
                            <Checkbox
                                style={{
                                    color: isDarkMode ? "#d1d5db" : "#6b7280",
                                }}
                                className="text-lg md:text-xl"
                            >
                                Pet-friendly
                            </Checkbox>
                        </div>
                        <div>
                            <Checkbox
                                style={{
                                    color: isDarkMode ? "#d1d5db" : "#6b7280",
                                }}
                            >
                                Smoking allowed
                            </Checkbox>
                        </div>
                    </div>
                </div>

                <div className="flex-1">
                    <h3
                        className="text-3xl md:text-4xl mb-2"
                        style={{
                            fontFamily: "Roboto",
                            fontWeight: "bold",
                            color: isDarkMode ? "#fff" : "#000",
                        }}
                    >
                        Listed Places
                    </h3>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {flats.slice(0, 4).map((flat, index) => (
                            <motion.div
                                key={index}
                                variants={slideUp}
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 1 }}
                            >
                                <Card
                                    cover={
                                        <img
                                            alt="flat"
                                            src={flat.image}
                                            style={{
                                                width: "100%",
                                                height: "200px",
                                                objectFit: "cover",
                                                borderRadius: "8px 8px 0 0",
                                            }}
                                        />
                                    }
                                    actions={[
                                        <Button key="view">
                                            View Details
                                        </Button>,
                                        <Button key="contact">
                                            Contact Owner
                                        </Button>,
                                    ]}
                                    style={{
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        background: isDarkMode
                                            ? "#2f2f2f"
                                            : "#fff",
                                    }}
                                    styles={{
                                        body: {
                                            flex: 1,
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "space-between",
                                        },
                                    }}
                                    variant="outlined"
                                >
                                    <CardMeta
                                        title={flat.title}
                                        description={
                                            <div>
                                                <p
                                                    style={{
                                                        color: isDarkMode
                                                            ? "#d1d5db"
                                                            : "#6b7280",
                                                    }}
                                                >
                                                    {flat.price}
                                                </p>
                                                <p
                                                    className="text-sm"
                                                    style={{
                                                        color: isDarkMode
                                                            ? "#9ca3af"
                                                            : "#6b7280",
                                                    }}
                                                >
                                                    {flat.amenities.join(", ")}
                                                </p>
                                            </div>
                                        }
                                    />
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                    <div className="text-center mb-8">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Button
                                type="default"
                                onClick={() => navigate("/listings")}
                            >
                                Show More
                            </Button>
                        </motion.div>
                    </div>

                    <h3
                        className="text-3xl md:text-4xl mb-2"
                        style={{
                            fontFamily: "Roboto",
                            fontWeight: "bold",
                            color: isDarkMode ? "#fff" : "#000",
                        }}
                    >
                        Listed Roommates
                    </h3>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {roommates.slice(0, 4).map((roommate, index) => (
                            <motion.div
                                key={index}
                                variants={slideUp}
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 1 }}
                            >
                                <Card
                                    cover={
                                        <div
                                            style={{
                                                width: "100%",
                                                height: "200px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                background: isDarkMode
                                                    ? "#2f2f2f"
                                                    : "#f0f0f0",
                                                borderRadius: "8px 8px 0 0",
                                            }}
                                        >
                                            <UserOutlined
                                                style={{
                                                    fontSize: "80px",
                                                    color: isDarkMode
                                                        ? "#fff"
                                                        : "#000",
                                                }}
                                            />
                                        </div>
                                    }
                                    actions={[
                                        <Button key="view">
                                            View Profile
                                        </Button>,
                                        <Button key="contact">Contact</Button>,
                                    ]}
                                    style={{
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        background: isDarkMode
                                            ? "#2f2f2f"
                                            : "#fff",
                                    }}
                                    styles={{
                                        body: {
                                            flex: 1,
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "space-between",
                                        },
                                    }}
                                    variant="outlined"
                                >
                                    <CardMeta
                                        title={roommate.name}
                                        description={
                                            <div>
                                                <p
                                                    style={{
                                                        color: isDarkMode
                                                            ? "#d1d5db"
                                                            : "#6b7280",
                                                    }}
                                                >
                                                    {roommate.preferences}
                                                </p>
                                                <p
                                                    className="text-sm"
                                                    style={{
                                                        color: isDarkMode
                                                            ? "#9ca3af"
                                                            : "#6b7280",
                                                    }}
                                                >
                                                    {roommate.details.join(
                                                        ", "
                                                    )}
                                                </p>
                                            </div>
                                        }
                                    />
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                    <div className="text-center mb-8">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Button
                                type="default"
                                onClick={() => navigate("/roommates")}
                            >
                                Show More
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
