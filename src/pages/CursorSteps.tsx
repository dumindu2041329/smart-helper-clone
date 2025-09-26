import GuideLayout from "@/components/GuideLayout";
import StepCard from "@/components/StepCard";
import CodeBlock from "@/components/CodeBlock";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const CursorSteps = () => {
  const powershellScript = `# Run PowerShell as Administrator

# Define folder paths
$folders = @(
    "$env:APPDATA\\Cursor",
    "$env:LOCALAPPDATA\\cursor-updater",
    "$env:LOCALAPPDATA\\Programs\\cursor"
)

# Delete the folders if they exist
foreach ($folder in $folders) {
    if (Test-Path $folder) {
        try {
            Remove-Item -Path $folder -Recurse -Force
            Write-Host "Deleted: $folder"
        } catch {
            Write-Host "Failed to delete: $folder - $_"
        }
    } else {
        Write-Host "Not found: $folder"
    }
}

# Generate new MachineGuid
$newMachineGuid = [guid]::NewGuid().ToString()
Write-Host "Generated new MachineGuid: $newMachineGuid"

# Update Registry MachineGuid
try {
    Set-ItemProperty -Path "HKLM:\\SOFTWARE\\Microsoft\\Cryptography" \`
        -Name "MachineGuid" -Value $newMachineGuid -Type String -Force
    Write-Host "MachineGuid successfully updated."
} catch {
    Write-Host "Failed to update MachineGuid - $_"
}`;

  return (
    <GuideLayout
      title="Complete Cursor Setup Guide"
      subtitle="Follow these steps to properly install and configure Cursor AI on your Windows machine"
      iconColor="bg-blue-600"
      icon="C"
    >
      {/* Process Tabs */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <Button 
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 glow"
        >
          🚀 Automatic Process
        </Button>
        <Button 
          variant="outline"
          className="border-foreground/20 text-foreground hover:bg-foreground/10 px-6 py-3"
        >
          ⚙️ Manual Process
        </Button>
      </div>

      {/* Automatic Process Section */}
      <div className="mb-12">
        <div className="gradient-card p-6 rounded-2xl mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 flex items-center">
            🚀 <span className="ml-2">Automatic Process (Recommended)</span>
          </h3>
          <p className="text-foreground/80 leading-relaxed">
            Follow this streamlined 4-step process that includes automated scripts to completely reset your Cursor installation. 
            This method includes temp email setup for account creation and ensures maximum compatibility.
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-8">
        <StepCard number={1} title="Step 1: Uninstall Cursor & Clear Local Storage" color="bg-blue-600">
          <p className="mb-4">
            Uninstall your Cursor software from Windows Settings or Control Panel. Then clear Cursor local storage from your browser by going to cursor.com, pressing F12, going to Application &gt; Storage &gt; Clear site data.
          </p>
        </StepCard>

        <StepCard number={2} title="Step 2: Reinstall Cursor" color="bg-blue-600">
          <p className="mb-4">
            Download and install a fresh copy of Cursor from the official website
          </p>
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => window.open('https://cursor.com/downloads', '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Download Cursor
          </Button>
        </StepCard>

        <StepCard number={3} title="Step 3: Run PowerShell Script" color="bg-blue-600">
          <p className="mb-4">
            Run the following script as Administrator in PowerShell to clean all Cursor data and generate a new Machine ID:
          </p>
          <CodeBlock code={powershellScript} label="PowerShell Command:" />
        </StepCard>

        <StepCard number={4} title="Step 4: Create New Account with Temp Email" color="bg-blue-600">
          <p className="mb-4">
            Go to a temporary email service, copy the temporary email address. Launch Cursor, sign up with your name and the temp email. Check the temp email for the verification code and paste it into Cursor to complete account creation. Your account is now ready with free usage!
          </p>
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => window.open('https://temp-mail.org/en/', '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            📧 Open Temp-Mail
          </Button>
        </StepCard>
      </div>

      {/* Completion Message */}
      <div className="mt-12 text-center">
        <div className="gradient-card p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center justify-center">
            🎉 <span className="ml-2">Installation Complete!</span>
          </h3>
          <p className="text-foreground/80 leading-relaxed">
            After following all steps, restart your computer and launch Cursor. You should now have a fresh installation with a new machine ID.
          </p>
        </div>
      </div>
    </GuideLayout>
  );
};

export default CursorSteps;