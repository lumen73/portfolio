import type { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { ProjectVersion } from "@/data/projectsData.js";

interface RgphVersionToggleProps {
  projectTitle: string;
  versions: ProjectVersion[];
  children: (version: ProjectVersion) => ReactNode;
}

export function RgphVersionToggle({ projectTitle, versions, children }: RgphVersionToggleProps) {
  if (versions.length === 0) return null;

  return (
    <Tabs defaultValue={versions[0].id}>
      <TabsList aria-label={`Versions de ${projectTitle}`} className="w-full h-auto flex-wrap">
        {versions.map((version) => (
          <TabsTrigger key={version.id} value={version.id} className="flex-1 min-w-32">
            {version.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {versions.map((version) => (
        <TabsContent key={version.id} value={version.id}>
          {children(version)}
        </TabsContent>
      ))}
    </Tabs>
  );
}
