import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function ConfigureRoles() {
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [loading, setLoading] = useState(false);

    const handleConfirmSubmit = async () => {
        setLoading(true);
        try {
            await axios.post("/api/admin/configurerole", { email, role });
            toast.success("Role updated successfully! 🎉");
            setEmail(""); // Reset email field
            setRole(""); // Reset role field
        } catch (err) {
            console.error(err);
            toast.error("Failed to update role. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-center mb-6">
                🙇🏻‍♂️ Update Roles
            </h2>
            <div className="space-y-6">
                <div className="space-y-2">
                    <Label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-200"
                    >
                        Email
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-stone-500 focus:border-stone-500"
                    />
                </div>

                <div className="space-y-2">
                    <Label
                        htmlFor="role"
                        className="block text-sm font-medium text-gray-200"
                    >
                        Role
                    </Label>
                    <select
                        id="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                        className="w-auto border rounded-lg focus:ring-1 bg-stone-800 focus:ring-stone-500 focus:border-stone-500 text-stone-100 py-2 px-4"
                    >
                        <option value="" disabled>
                            Select a role
                        </option>
                        <option value="ADMIN">Admin</option>
                        <option value="USER">User</option>
                    </select>
                </div>

                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button
                            disabled={loading || !email || !role}
                            className={`w-full py-3 mt-4 font-semibold rounded-lg shadow-lg ${
                                loading
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-red-800 text-red-100 border border-red-700 hover:bg-red-700"
                            }`}
                        >
                            {loading ? `Setting role to ${role}...` : `Set Role`}
                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>
                                Are you absolutely sure?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                                This action will update the user's role. Please confirm to
                                proceed.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={handleConfirmSubmit}>
                                Confirm
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </div>
    );
}