
import React, { useState } from 'react';
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
          toast({
            title: "Welcome back!",
            description: "You have been signed in successfully.",
          });
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
            {isSignUp ? 'Sign up' : 'Log in'}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="text-2xl font-semibold">Welcome to StayFinder</div>

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
