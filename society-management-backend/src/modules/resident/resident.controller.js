
import * as residentService from "./resident.service.js";
import { successResponse } from "../../utils/response.js";

export async function createResident(req, res, next) {
    try {
        const resident = await residentService.createResident(req, req.body);

        return successResponse(
            res,
            resident,
            "Resident created successfully",
            201
        );
    } catch (error) {
        next(error);
    }
}

export async function getResidents(req, res, next) {
    try {
        const residents = await residentService.getResidents(req);

        return successResponse(
            res,
            residents,
            "Residents fetched successfully"
        );
    } catch (error) {
        next(error);
    }
}

export async function getResidentById(req, res, next) {
    try {
        const resident = await residentService.getResidentById(
            req,
            req.params.id
        );

        return successResponse(
            res,
            resident,
            "Resident fetched successfully"
        );
    } catch (error) {
        next(error);
    }
}

export async function updateResident(req, res, next) {
    try {
        const resident = await residentService.updateResident(
            req,
            req.params.id,
            req.body
        );

        return successResponse(
            res,
            resident,
            "Resident updated successfully"
        );
    } catch (error) {
        next(error);
    }
}

export async function deleteResident(req, res, next) {
    try {
        const resident = await residentService.deleteResident(
            req,
            req.params.id
        );

        return successResponse(
            res,
            resident,
            "Resident deleted successfully"
        );
    } catch (error) {
        next(error);
    }
}