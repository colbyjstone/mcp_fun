import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import Link from 'next/link';

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">About MCP Fun</h1>
      
      <div className="max-w-2xl w-full">
        <Card
          title="What is MCP Fun?"
          description="MCP Fun is a demonstration project showcasing Next.js capabilities for MCP projects. It includes examples of components, pages, and API routes."
          footer={
            <div className="flex justify-end">
              <Link href="/">
                <Button variant="primary">Back to Home</Button>
              </Link>
            </div>
          }
          className="mb-6"
        />
        
        <Card
          title="Technology Stack"
          description="This project uses Next.js 14 with the App Router, TypeScript, TailwindCSS, and other modern web technologies."
          className="mb-6"
        />
      </div>
    </main>
  );
}
