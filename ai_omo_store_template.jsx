import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function StoreLandingPage() {
  return (
    <div className="min-h-screen bg-white text-black p-6 md:p-10">
      <header className="text-center space-y-4 mb-10">
        <h1 className="text-4xl md:text-5xl font-bold">AI OMO 商店系统™</h1>
        <p className="text-lg md:text-xl">
          Launch your AI-powered bilingual store in 1 day — for freelancers, TikTok sellers, and global e-commerce creators.
        </p>
        <div className="flex justify-center gap-4">
          <Button>🌍 View Live Demo</Button>
          <Button variant="outline">📘 Download Setup Guide</Button>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardContent className="p-6 space-y-2">
            <h2 className="text-2xl font-semibold">🚀 Quick Deployment</h2>
            <p>Deploy your store within minutes via GitHub Pages or Firebase.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-2">
            <h2 className="text-2xl font-semibold">🤖 AI-Powered Content</h2>
            <p>Product pages, customer replies, and marketing text all powered by GPT.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-2">
            <h2 className="text-2xl font-semibold">🌐 Bilingual Support</h2>
            <p>Auto-generated Chinese + English content ready for global sales.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-2">
            <h2 className="text-2xl font-semibold">📦 Template Library</h2>
            <p>Includes Notion product sheets, guides, UI packs, and ready-to-use blocks.</p>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center text-sm text-gray-500">
        © 2025 AIX店™ — Smart Store System. All rights reserved.
      </footer>
    </div>
  );
}
