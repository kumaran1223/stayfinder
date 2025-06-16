
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [phoneAuth, setPhoneAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { signIn, signUp } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const name = formData.get('name') as string;

    try {
      let error;
      if (isSignUp) {
        ({ error } = await signUp(email, password, name));
        if (!error) {
          toast({
            title: "Success!",
            description: "Please check your email to confirm your account.",
          });
          onClose();
        }
      } else {
        ({ error } = await signIn(email, password));
        if (!error) {
          onClose();
        }
      }
      
      if (error) {
        toast({
          title: isSignUp ? "Error signing up" : "Error signing in",
          description: error.message,
          variant: "destructive",
        });
      }
    } catch (err) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
    
    setIsLoading(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-center">
            {isSignUp ? 'Sign up' : 'Log in or sign up'}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="text-2xl font-semibold">Welcome to StayFinder</div>

          {!phoneAuth ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {isSignUp && (
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    className="mt-1 h-12"
                    required
                  />
                </div>
              )}

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="mt-1 h-12"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="mt-1 h-12"
                  minLength={6}
                  required
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white h-12 rounded-lg font-semibold"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : (isSignUp ? 'Sign up' : 'Log in')}
              </Button>
            </form>
          ) : (
            <div className="space-y-4">
              <div>
                <Label htmlFor="country">Country/Region</Label>
                <select className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                  <option>India (+91)</option>
                  <option>United States (+1)</option>
                  <option>United Kingdom (+44)</option>
                </select>
              </div>

              <div>
                <Label htmlFor="phone">Phone number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Phone number"
                  className="mt-1 h-12"
                />
              </div>

              <p className="text-xs text-gray-600">
                We'll call or text you to confirm your number. Standard message and data rates apply.{' '}
                <a href="#" className="underline">Privacy Policy</a>
              </p>

              <Button 
                className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white h-12 rounded-lg font-semibold"
              >
                Continue
              </Button>
            </div>
          )}

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>

          <div className="space-y-3">
            <Button variant="outline" className="w-full h-12 font-semibold">
              <div className="flex items-center justify-center space-x-2">
                <span>🔍</span>
                <span>Continue with Google</span>
              </div>
            </Button>

            <Button variant="outline" className="w-full h-12 font-semibold">
              <div className="flex items-center justify-center space-x-2">
                <span>🍎</span>
                <span>Continue with Apple</span>
              </div>
            </Button>

            <Button 
              variant="outline" 
              className="w-full h-12 font-semibold"
              onClick={() => setPhoneAuth(!phoneAuth)}
            >
              <div className="flex items-center justify-center space-x-2">
                <span>✉️</span>
                <span>Continue with email</span>
              </div>
            </Button>

            <Button variant="outline" className="w-full h-12 font-semibold">
              <div className="flex items-center justify-center space-x-2">
                <span>📘</span>
                <span>Continue with Facebook</span>
              </div>
            </Button>
          </div>

          <div className="text-center">
            <button 
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-sm text-gray-600 hover:underline"
            >
              {isSignUp ? 'Already have an account? Log in' : "Don't have an account? Sign up"}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
