import React from "react";
import useOnBoarding from "../hooks/use-onboarding";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "../ui/label";
import Gender from "../ui/Gender";
import { Input } from "../ui/input";
import Button from "../ui/Button";

const OnBoarding = () => {
  const onboarding = useOnBoarding();

  return (
    <Dialog open={onboarding.isOpen} onOpenChange={onboarding.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl font-medium text-darkblue">Welcome to the Platform!</DialogTitle>
          <DialogDescription className="text-lightblue">
            Thank you for logging in! Let's get started with your onboarding process.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          {/* Gender */}
          <div className="flex flex-col gap-2">
            <Label className="text-lg">Gender</Label>
            <Gender />
          </div>
          <div className="flex flex-col gap-1">
            <Label className="text-lg">Bio</Label>
            <Input
              placeholder="Programmer, Agentic Ai Developer"
             />
          </div>
          <div className="mt-2 w-full">
            <Button
              text="Continue"
             />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OnBoarding;
