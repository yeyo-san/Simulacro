import { Permissions } from "../models/permissionModel";

export async function hasPermission(userId: number, entityId: number, action: string): Promise<boolean> {
  const permission = await Permissions.findOne({
    where: {
      entityId,
    },
  });

  if (!permission) {
    return false;
  }

  switch (action) {
    case 'create':
      return permission.canCreate;
    case 'update':
      return permission.canUpdate;
    case 'delete':
      return permission.canDelete;
    case 'get':
      return permission.canGet;
    default:
      return false;
  }
}