import { Section } from "@radix-ui/themes";
import { cn } from "../../lib/components/utils/cn";

export interface SectionWrapperProps {
  children: React.ReactNode;
  height?: string;
  spacing?: string;
  heading?: string;
  backgroundColor?: string;
  backgroundImage?: string;
}

const defaultBackgroundColors =
  "le-bg-blue-300 sm:le-bg-red-300 md:le-bg-yellow-300 lg:le-bg-purple-300";
const defaultSpacing = "le-px-4 le-mt-4 le-mb-10 le-mx-4";

const SectionWrapper = ({
  children,
  height = "le-h-[400px]",
  spacing = defaultSpacing,
  heading = "",
  backgroundColor = defaultBackgroundColors,
  backgroundImage = "",
}: SectionWrapperProps) => {
  return (
    <>
      {heading && (
        <h2 className="le-text-2xl le-font-bold le-mb-4 le-mx-4">{heading}</h2>
      )}
      <Section
        style={{
          backgroundImage: backgroundImage
            ? `url(${backgroundImage})`
            : undefined, // Set the background image
          backgroundSize: "cover", // Cover the entire section
          backgroundPosition: "center", // Center the image
          backgroundRepeat: "no-repeat", // Prevent the image from repeating
        }}
        className={cn(spacing, backgroundColor, height)}
        size="2"
      >
        {children}
      </Section>
    </>
  );
};

export default SectionWrapper;
