export type AttributeTypes = "string" | "number" | "boolean" | "date" | "enum";

export interface AttributeDefinitionType {
  label: string;
  type: AttributeTypes;
  isNullable?: boolean;
  dependsOn?: string[];
  modelName?: string;
  options?: { label: string; value: string }[];
}

export type AttributeDefinitionMapType = {
  [key: string]: AttributeDefinitionType;
};

export interface OptionItemType {
  label: string;
  value: string;
}
export interface AttributeOptionItemType extends OptionItemType {
  type: AttributeTypes;
}
export type AttributeOptionsArrayType = AttributeOptionItemType[];
