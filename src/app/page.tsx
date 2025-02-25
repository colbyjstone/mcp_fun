import Link from 'next/link';
import { Button } from '@/components/Button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to MCP Fun!</h1>
        <p className="text-center mb-8">This is a Next.js application for MCP projects.</p>
        
        <div className="flex justify-center space-x-4">
          <Link href="/about">
            <Button variant="primary">About</Button>
          </Link>
          <Link href="/api/hello" target="_blank">
            <Button variant="outline">Try API</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
