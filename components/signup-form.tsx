"use client";

import { useState } from "react";
import axios from "axios";
import { GalleryVerticalEnd } from "lucide-react";
import { toast } from "react-toastify";
import { Checkbox } from "@/components/ui/checkbox"; // Ensure Checkbox is correctly typed as an input element
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import sendEmail  from "@/pages/api/emails/sendEmail";

export function SignupForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [passwordError, setPasswordError] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;

        setFormData((prev) => ({ ...prev, [id]: value }));

        // Dynamic password comparison
        if (id === "confirmPassword" || id === "password") {
            if (id === "confirmPassword" && value !== formData.password) {
                setPasswordError("Passwords do not match");
            } else if (
                id === "password" && formData.confirmPassword &&
                value !== formData.confirmPassword
            ) {
                setPasswordError("Passwords do not match");
            } else {
                setPasswordError("");
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!passwordError && formData.name && formData.email && formData.password) {
            try {
                // Post data using Axios
                const data = {
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                };

                const response = await axios.post("/api/auth/register", data);

                if (response.status === 201) {
                    toast.success("Account created successfully, please login");
                    window.location.href = "/user/login";
                } else {
                    toast.error("Something went wrong. Please try again.");
                }
            } catch (error: any) {
                console.log(error);
                toast.error(
                    error.response?.data?.message || "Failed to register.",
                );
            }
        } else {
            toast.error("Please fix the errors before submitting");
        }
        try{
            await sendEmail(formData.email, "Welcome to CMS Online", "Thank you for signing up!");
            toast.success("Onboarding mail sent successfully");
        }
        catch{
            toast.error("Error sending onboarding mail");
        }
        
    };

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-center gap-2">
                        <a
                            href="/"
                            className="flex flex-col items-center gap-2 font-medium"
                        >
                            <div className="flex h-8 w-8 items-center justify-center rounded-md">
                                <GalleryVerticalEnd
                                    className="size-6"
                                    aria-label="Gallery Icon"
                                />
                            </div>
                            <p className="text-center text-2xl font-bold">
                                Register your account
                            </p>
                        </a>
                        <div className="text-center text-sm">
              Already have an account?{" "}
              <a href="/user/login" className="underline underline-offset-4">
                Login
              </a>
            </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="Your name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="name@example.com"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="confirmPassword">
                                Confirm Password
                            </Label>
                            <Input
                                id="confirmPassword"
                                type="password"
                                placeholder="Confirm password"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        {passwordError && (
                            <p className="text-red-500 text-sm">
                                {passwordError}
                            </p>
                        )}
                        <Button type="submit" className="w-full">
                            Register
                        </Button>
                        <div className="flex justify-center items-center space-x-2">
                            <Checkbox
                                id="terms"
                            />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Accept terms and conditions
                            </label>
                        </div>
                        <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary  ">
                            By clicking continue, you agree to our{" "}
                            <a href="#">Terms of Service</a> and{" "}
                            <a href="#">Privacy Policy</a>.
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}