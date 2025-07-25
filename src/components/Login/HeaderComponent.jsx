import { Button, Menu, Drawer, Layout, Switch } from "antd";
import {
    HomeOutlined,
    UserOutlined,
    ApartmentOutlined,
    LogoutOutlined,
    MenuOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

// Animation variants
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
};

const drawerVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
};

const HeaderComponent = ({
    isDarkMode,
    setIsDarkMode,
    isSmallScreen,
    showModal,
    showDrawer,
    isDrawerOpen,
    closeDrawer,
}) => {
    const navigate = useNavigate();

    const menuItems = [
        {
            key: "1",
            icon: <HomeOutlined />,
            label: "Home",
            onClick: () => {
                navigate("/");
            },
        },
        {
            key: "2",
            icon: <UserOutlined />,
            label: "My Requests",
        },
        {
            key: "3",
            icon: <ApartmentOutlined />,
            label: "Listings",
            onClick: () => {
                navigate("/listings");
            },
        },
        {
            key: "4",
            icon: <LogoutOutlined />,
            label: "Logout",
            onClick: showModal,
        },
    ];

    const handleToggleDarkMode = () => {
        setIsDarkMode((prev) => !prev); // Ensure state toggle
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
        >
            <Header
                style={{
                    background: isDarkMode ? "#141414" : "#131D4F",
                    padding: "0 16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    overflowX: "hidden",
                }}
            >
                <motion.div
                    variants={fadeIn}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                    }}
                    onClick={() => navigate("/")}
                >
                    <motion.img
                        variants={fadeIn}
                        src="/logo.svg"
                        alt="Smart Rentals Logo"
                        style={{
                            height: isSmallScreen ? 32 : 40,
                            paddingRight: "10px",
                        }}
                    />
                    {!isSmallScreen && (
                        <motion.h1
                            variants={fadeIn}
                            style={{
                                margin: 0,
                                fontFamily:
                                    "Edu NSW ACT Hand Prescript, cursive",
                                fontSize: isSmallScreen ? "1.5rem" : "2.3rem",
                                fontWeight: "bold",
                                color: "#fff",
                                textShadow: isDarkMode
                                    ? "1px 1px 2px rgba(0, 0, 0, 0.5)"
                                    : "none",
                            }}
                        >
                            Smart Rentals
                        </motion.h1>
                    )}
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        flex: 1,
                        justifyContent: "flex-end",
                    }}
                >
                    {isSmallScreen ? (
                        <>
                            <motion.div variants={fadeIn}>
                                <Button
                                    type="text"
                                    icon={<MenuOutlined />}
                                    onClick={showDrawer}
                                    style={{ color: "#fff" }}
                                    aria-label="Open menu"
                                />
                            </motion.div>
                            <Drawer
                                title="Menu"
                                placement="right"
                                onClose={closeDrawer}
                                open={isDrawerOpen}
                                width={250}
                                style={{
                                    background: isDarkMode ? "#1f1f1f" : "#fff",
                                }}
                            >
                                <motion.div
                                    variants={drawerVariants}
                                    initial="hidden"
                                    animate={
                                        isDrawerOpen ? "visible" : "hidden"
                                    }
                                >
                                    <Menu
                                        theme={isDarkMode ? "dark" : "light"}
                                        mode="vertical"
                                        defaultSelectedKeys={["1"]}
                                        items={menuItems}
                                        style={{
                                            background: isDarkMode
                                                ? "#1f1f1f"
                                                : "#fff",
                                            color: isDarkMode ? "#fff" : "#000",
                                            fontFamily: "cursive",
                                            fontWeight: 700,
                                        }}
                                    />
                                </motion.div>
                            </Drawer>
                        </>
                    ) : (
                        <motion.div variants={staggerContainer}>
                            <Menu
                                theme="dark"
                                mode="horizontal"
                                defaultSelectedKeys={["1"]}
                                items={menuItems}
                                overflowedIndicator={null}
                                style={{
                                    borderBottom: "none",
                                    background: "transparent",
                                    fontFamily: "Roboto",
                                    fontWeight: 400,
                                    flex: 1,
                                    fontSize: "15px",
                                    justifyContent: "flex-end",
                                    lineHeight: "64px",
                                }}
                            />
                        </motion.div>
                    )}
                    <motion.div variants={fadeIn}>
                        <span style={{ color: "#fff" }}>
                            {isDarkMode ? "Dark Mode" : "Light Mode"}
                        </span>
                    </motion.div>
                    <motion.div variants={fadeIn}>
                        <Switch
                            checked={isDarkMode}
                            onChange={handleToggleDarkMode}
                            checkedChildren={<span role="img">🌙</span>}
                            unCheckedChildren={<span role="img">☀️</span>}
                        />
                    </motion.div>
                </motion.div>
            </Header>
        </motion.div>
    );
};

export default HeaderComponent;
