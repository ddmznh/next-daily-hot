/*
 * @Author: 白雾茫茫丶<baiwumm.com>
 * @Date: 2025-11-20 09:43:44
 * @LastEditors: 白雾茫茫丶<baiwumm.com>
 * @LastEditTime: 2026-03-11 16:35:42
 * @Description: 底部版权
 */
'use client'
import { Button, Description, Link, Separator, Tooltip } from "@heroui/react";
import dayjs from 'dayjs';
import { ChartColumn, Globe, House, IdCard, Mail } from 'lucide-react';
import Image from 'next/image';
import { type ReactNode } from 'react';

import {
  Status,
  StatusIndicator,
  StatusLabel,
} from "@/components/Status";
import { ApiIcon } from '@/lib/icons';
import pkg from '#/package.json';

type Social = {
  icon?: ReactNode;
  image?: string;
  url: string;
  label: string;
}

export default function Footer() {
  // 社交图标
  const SocialLinks: Social[] = [
    {
      icon: <Mail />,
      url: `mailto:info@aiyunkeji.com`,
      label: '邮箱'
    },
    {
      icon: <House />,
      url: 'https://aiyunkeji.com',
      label: '官网'
    }
  ]
  return (
    <footer className="flex w-full flex-col" id="footer">
      <Separator />
      <div className="mx-auto w-full container! px-6 py-2 md:flex md:items-center md:justify-between">
        <div className="md:order-1">
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <div className="flex items-center gap-2">
              <Image src='/logo.svg' width={20} height={20} alt="Logo" />
              <span className="text-sm font-bold">{process.env.NEXT_PUBLIC_APP_NAME}</span>
            </div>
            <Separator className="h-4" orientation="vertical" />
            <Status variant="success">
              <StatusIndicator />
              <StatusLabel>服务状态正常</StatusLabel>
            </Status>
          </div>
          <Description className="text-center md:text-start mt-1">
            &copy; {dayjs().format('YYYY')} {" "}
            <a
              href={pkg.author.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              {process.env.NEXT_PUBLIC_COPYRIGHT}
            </a>
            . All rights reserved.
          </Description>
        </div>
        
        </div>
      </div>
    </footer>
  );
}
