import GuideLayout from "@/components/GuideLayout";
import StepCard from "@/components/StepCard";
import CodeBlock from "@/components/CodeBlock";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const WarpSteps = () => {
  const cleanDataScript = `# Search common locations for Warp leftovers
$searchPaths = @(
  "C:\\Program Files",
  "C:\\Program Files (x86)",
  "$env:LOCALAPPDATA",
  "$env:APPDATA",
  "C:\\Users\\Public"
)

foreach ($sp in $searchPaths) {
    Write-Output "Searching $sp for Warp files..."
    Get-ChildItem -Path $sp -Recurse -Force -ErrorAction SilentlyContinue -Include *Warp* |
        ForEach-Object {
            try {
                Write-Output "Deleting: $($_.FullName)"
                Remove-Item -Path $_.FullName -Recurse -Force
            } catch {
                Write-Output "Could not delete: $($_.FullName) - $($_.Exception.Message)"
            }
        }
}`;

  const registryScript = `# Run in PowerShell as Administrator

$warpKeys = @(
  "HKCU:\\Software\\Warp",
  "HKLM:\\SOFTWARE\\Warp",
  "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\Warp*",
  "HKLM:\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\Warp*",
  "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Run",
  "HKLM:\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run"
)

foreach ($key in $warpKeys) {
    try {
        # Find matching keys
        $matches = Get-ItemProperty -Path $key -ErrorAction SilentlyContinue | Out-String
        if ($matches -match "Warp") {
            Write-Output "Deleting registry key: $key"
            Remove-Item -Path $key -Recurse -Force -ErrorAction SilentlyContinue
        }
    } catch {}
}

# Extra: search entire registry for "Warp" (this takes time)
Write-Output "Searching registry for 'Warp' entries..."
Get-ChildItem -Path HKCU:\\, HKLM:\\ -Recurse -ErrorAction SilentlyContinue |
    Where-Object { $_.Name -match "Warp" } |
    ForEach-Object {
        try {
            Write-Output "Deleting: $($_.Name)"
            Remove-Item -Path $_.PsPath -Recurse -Force -ErrorAction SilentlyContinue
        } catch {}
    }

Write-Output "Warp registry cleanup completed!"`;

  return (
    <GuideLayout
      title="Complete Warp Setup Guide"
      subtitle="Follow these steps to properly reinstall and configure Warp with a fresh account"
      iconColor="bg-green-600"
      icon="W"
    >
      {/* Steps */}
      <div className="space-y-8">
        <StepCard number={1} title="Step 1: Logout from Warp Website" color="bg-green-600">
          <p>
            Logout your account from the Warp website
          </p>
        </StepCard>

        <StepCard number={2} title="Step 2: Uninstall Warp App" color="bg-green-600">
          <p>
            Uninstall the Warp application from your system
          </p>
        </StepCard>

        <StepCard number={3} title="Step 3: Clean WARP Data and Services" color="bg-green-600">
          <p className="mb-4">
            Run this PowerShell command as administrator to search and remove all Warp leftovers:
          </p>
          <CodeBlock code={cleanDataScript} label="PowerShell Command:" />
        </StepCard>

        <StepCard number={4} title="Step 4: Clean Warp Registry Entries" color="bg-green-600">
          <p className="mb-4">
            Run this PowerShell command as Administrator to remove Warp-related registry keys:
          </p>
          <CodeBlock code={registryScript} label="PowerShell Command:" />
        </StepCard>

        <StepCard number={5} title="Step 5: Get Temporary Email" color="bg-green-600">
          <p className="mb-4">
            Go to the temporary email service to create a new account
          </p>
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => window.open('https://temp-mail.org/en/', '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Visit Temp-Mail
          </Button>
        </StepCard>

        <StepCard number={6} title="Step 6: Create New Warp Account" color="bg-green-600">
          <p>
            Use the temporary email to create a new Warp account. If you're already an existing user who used temp mail before, clear the local storage in the temp mail application first.
          </p>
        </StepCard>

        <StepCard number={7} title="Step 7: Install and Login" color="bg-green-600">
          <p>
            Install Warp again and login successfully with your new free account
          </p>
        </StepCard>
      </div>

      {/* Completion Message */}
      <div className="mt-12">
        <div className="gradient-card p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center justify-center">
            🎉 <span className="ml-2">Setup Complete!</span>
          </h3>
          <p className="text-foreground/80 leading-relaxed mb-6">
            After following all steps, you should have a fresh Warp installation with a new account. Make sure to restart your computer if necessary.
          </p>
          
          <div className="border-t border-border/30 pt-6">
            <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
              ⚠️ <span className="ml-2">Important Notes:</span>
            </h4>
            <ul className="text-foreground/80 space-y-2">
              <li>• Run PowerShell commands as Administrator</li>
              <li>• If you're an existing user who used temp mail before, clear the local storage in the temp mail application</li>
              <li>• Restart your computer after running the cleanup commands</li>
              <li>• Use the temporary email only for creating the new Warp account</li>
            </ul>
          </div>
        </div>
      </div>
    </GuideLayout>
  );
};

export default WarpSteps;