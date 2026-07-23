router.post(
  "/",
  authenticate,
  requireOrganization,
  authorize({
    resident: ["create"],
  }),
  validate(createResidentSchema),
  residentController.createResident
);

router.get(
  "/",
  authenticate,
  requireOrganization,
  authorize({
    resident: ["read"],
  }),
  residentController.getResidents
);

router.patch(
  "/:id",
  authenticate,
  requireOrganization,
  authorize({
    resident: ["update"],
  }),
  validate(updateResidentSchema),
  residentController.updateResident
);

router.delete(
  "/:id",
  authenticate,
  requireOrganization,
  authorize({
    resident: ["delete"],
  }),
  residentController.deleteResident
);