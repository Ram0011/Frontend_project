import { Form, Input, Button } from "antd";
import { motion } from "framer-motion";
import axios from "axios";
import { message } from "antd";

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

const LoginForm = ({ isDarkMode, navigate, setLoading, loading }) => {
    const onFinish = async (values) => {
        setLoading(true);
        try {
            const response = await axios.post(
                "http://localhost:4000/api/auth/login",
                {
                    emailid: values.emailid,
                    pwd: values.password,
                }
            );
            if (response.data.success) {
                localStorage.setItem("token", response.data.token);
                message.success(`Welcome, ${response.data.userName}!`);
                navigate("/");
            } else {
                message.error(
                    "Invalid user ID or password. If you're not registered, please sign up."
                );
            }
        } catch (error) {
            const msg =
                error.response?.data?.error ||
                "Login failed. Please try again.";
            message.error(msg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
        >
            <Form
                id="login-form"
                name="login"
                onFinish={onFinish}
                style={{
                    width: "100%",
                    padding: "0 16px",
                }}
            >
                <motion.div variants={fadeIn}>
                    <Form.Item
                        name="emailid"
                        rules={[
                            {
                                required: true,
                                message: "Please input your User ID!",
                            },
                        ]}
                    >
                        <Input
                            placeholder="Email"
                            className="text-base md:text-lg"
                            style={{
                                fontFamily: "Indie Flower, cursive",
                            }}
                        />
                    </Form.Item>
                </motion.div>
                <motion.div variants={fadeIn}>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Password!",
                            },
                        ]}
                    >
                        <Input.Password
                            placeholder="Password"
                            className="text-base md:text-lg"
                            style={{
                                fontFamily: "Indie Flower, cursive",
                            }}
                        />
                    </Form.Item>
                </motion.div>
                <motion.div variants={fadeIn}>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={loading}
                            className="text-base md:text-lg"
                            style={{ width: "100%" }}
                        >
                            Log In
                        </Button>
                    </Form.Item>
                </motion.div>
            </Form>
        </motion.div>
    );
};

export default LoginForm;
