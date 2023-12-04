'use client';

import React from 'react';
import { Button } from './ui/button';
import { MessageSquarePlusIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

const CreateChatButton = () => {
   const router = useRouter();

   const CreateNewChat = async () => {
      // all the loogic here
      router.push(`/chat/abc`);
   };
   return (
      <Button onClick={CreateNewChat} variant={'ghost'}>
         <MessageSquarePlusIcon />
      </Button>
   );
};

export default CreateChatButton;
