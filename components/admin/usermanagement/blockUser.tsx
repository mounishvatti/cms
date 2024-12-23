import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const BlockUsers = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [currentBlockStatus, setCurrentBlockStatus] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setCurrentBlockStatus(null); // Reset block status on email change
  };

  const checkUserBlockStatus = async () => {
    if (!email) {
      toast.error("Please provide a valid email.");
      return;
    }

    try {
      const response = await axios.get("/api/admin/blockuser", {
        params: { email }
      });
      setCurrentBlockStatus(response.data.blockStatus);
      toast.success(
        response.data.blockStatus
          ? "User is currently blocked."
          : "User is not blocked."
      );
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch user block status. Please try again.");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset error state

    if (!email) {
      toast.error("Please provide a valid email.");
      setLoading(false);
      return;
    }

    try {
      const data = {
        email,
        blockStatus: currentBlockStatus ? "false" : "true", // Toggle block status
      };

      await axios.post("/api/admin/blockuser", data);
      toast.success(
        currentBlockStatus
          ? "User unblocked successfully!"
          : "User blocked successfully!"
      );
      setEmail(""); // Reset email field
      setCurrentBlockStatus(null); // Reset block status
    } catch (err) {
      console.error(err);
      toast.error("Failed to update block status. Please try again.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="max-w-md mx-auto p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Block/Unblock User
        </h2>
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="m@example.com"
              required
              className="w-full p-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-stone-500 focus:border-stone-500"
            />
          </div>

          <Button
            type="button"
            onClick={checkUserBlockStatus}
            className="w-full py-3 font-semibold rounded-lg bg-slate-800 text-white hover:bg-slate-600"
            disabled={!email || loading}
          >
            Check Block Status
          </Button>

          <Button
            type="submit"
            disabled={loading || currentBlockStatus === null || !email}
            className={`w-full py-3 mt-4 font-semibold rounded-lg shadow-lg ${
              loading || currentBlockStatus === null
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-800 text-red-100 border border-red-700 hover:bg-red-700"
            }`}
          >
            {loading
              ? "Processing..."
              : currentBlockStatus
              ? "Unblock User"
              : "Block User"}
          </Button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-center text-sm font-extralight text-gray-400">
            Please enter the email address of the user you want to block.
            <br />
            Click the "Check Block Status" button to know the current block status
            of the user.
            <br />
            Click the "Block User" button to block the user.
        </p>
      </div>
    </form>
  );
};

export default BlockUsers;