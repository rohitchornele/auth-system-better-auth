import { createAccessControl } from "better-auth/plugins/access";
import {
  defaultStatements,
  adminAc,
  memberAc,
  ownerAc,
} from "better-auth/plugins/organization/access";

export const statement = {
  ...defaultStatements,

  resident: [
    "create",
    "read",
    "update",
    "delete",
  ],

  visitor: [
    "create",
    "read",
    "update",
    "delete",
    "approve",
    "checkIn",
    "checkOut",
  ],

  complaint: [
    "create",
    "read",
    "update",
    "delete",
    "assign",
    "resolve",
  ],

  notice: [
    "create",
    "read",
    "update",
    "delete",
    "publish",
  ],

  dashboard: [
    "read",
  ],
};

export const ac = createAccessControl(statement);

export const owner = ac.newRole({
  ...ownerAc.statements,

  resident: ["create", "read", "update", "delete"],
  visitor: ["create", "read", "update", "delete", "approve"],
  complaint: ["create", "read", "update", "delete", "assign", "resolve"],
  notice: ["create", "read", "update", "delete", "publish"],
  dashboard: ["read"],
});

export const admin = ac.newRole({
  ...adminAc.statements,

  resident: ["create", "read", "update"],
  visitor: ["create", "read", "update", "approve"],
  complaint: ["create", "read", "update", "assign", "resolve"],
  notice: ["create", "read", "update", "publish"],
  dashboard: ["read"],
});

export const member = ac.newRole({
  ...memberAc.statements,

  complaint: ["create", "read"],
  notice: ["read"],
  dashboard: ["read"],
});