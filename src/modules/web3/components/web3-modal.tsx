"use client";

import * as React from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface BaseProps {
  children: React.ReactNode;
}

interface RootWeb3ModalProps extends BaseProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

interface Web3ModalProps extends BaseProps {
  className?: string;
  asChild?: true;
}

const Web3Modal = ({ children, ...props }: RootWeb3ModalProps) => {
  const isMobile = useIsMobile();
  const Component = isMobile ? Drawer : Dialog;

  return <Component {...props}>{children}</Component>;
};

const Web3ModalTrigger = ({
  className,
  children,
  ...props
}: Web3ModalProps) => {
  const isMobile = useIsMobile();
  const Component = isMobile ? DrawerTrigger : DialogTrigger;

  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
};

const Web3ModalClose = ({ className, children, ...props }: Web3ModalProps) => {
  const isMobile = useIsMobile();
  const Component = isMobile ? DrawerClose : DialogClose;

  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
};

const Web3ModalContent = ({
  className,
  children,
  ...props
}: Web3ModalProps) => {
  const isMobile = useIsMobile();
  const Component = isMobile ? DrawerContent : DialogContent;

  return (
    <Component
      className={cn(
        "rounded-t-3xl sm:rounded-3xl md:max-w-[360px] [&>button]:top-[26px] [&>button]:right-[26px]",
        className,
      )}
      onOpenAutoFocus={(e) => e.preventDefault()}
      {...props}
    >
      {children}
    </Component>
  );
};

const Web3ModalDescription = ({
  className,
  children,
  ...props
}: Web3ModalProps) => {
  const isMobile = useIsMobile();
  const Component = isMobile ? DrawerDescription : DialogDescription;

  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
};

const Web3ModalHeader = ({ className, children, ...props }: Web3ModalProps) => {
  const isMobile = useIsMobile();
  const Component = isMobile ? DrawerHeader : DialogHeader;

  return (
    <Component className={cn("space-y-0 pb-6 md:pb-3", className)} {...props}>
      {children}
    </Component>
  );
};

const Web3ModalTitle = ({ className, children, ...props }: Web3ModalProps) => {
  const isMobile = useIsMobile();
  const Component = isMobile ? DrawerTitle : DialogTitle;

  return (
    <Component className={cn("text-center", className)} {...props}>
      {children}
    </Component>
  );
};

const Web3ModalBody = ({ className, children, ...props }: Web3ModalProps) => {
  return (
    <ScrollArea
      className={cn(
        "h-[234px] max-h-[300px] px-6 md:-mr-4 md:h-full md:min-h-[260px] md:px-0 md:pr-4",
        className,
      )}
      {...props}
    >
      {children}
    </ScrollArea>
  );
};

const Web3ModalFooter = ({ className, children, ...props }: Web3ModalProps) => {
  const isMobile = useIsMobile();
  const Component = isMobile ? DrawerFooter : DialogFooter;

  return (
    <Component className={cn("py-3.5 md:py-0", className)} {...props}>
      {children}
    </Component>
  );
};

export {
  Web3Modal,
  Web3ModalBody,
  Web3ModalClose,
  Web3ModalContent,
  Web3ModalDescription,
  Web3ModalFooter,
  Web3ModalHeader,
  Web3ModalTitle,
  Web3ModalTrigger,
};
