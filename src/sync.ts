import { NextFunction, Request, Response } from "express";
import { db, location,actionTypes } from "./seed";
export const pull = async (req: Request, res: Response, ctx: NextFunction) => {
  console.log("QUERY", req.query);
  const { last_pulled_at } = req.query;

  res
    .status(200)
    .json(last_pulled_at === "null" ? mockedRequest : emptyRequest);
};

const emptyRequest = {
  timestamp: Date.now(),
  changes: {
    iniciativa: {
      created: [],
      deleted: [],
      updated: [],
    },
    Localizacao: {
      created: [],
      deleted: [],
      updated: [],
    },
    users: {
      created: [],
      deleted: [],
      updated: [],
    },
    issues: {
      created: [],
      deleted: [],
      updated: [],
    },
    time_entries: {
      created: [],
      deleted: [],
      updated: [],
    },
    projects: {
      created: [],
      deleted: [],
      updated: [],
    },
    tipoaccao: {
      created: [],
      deleted: [],
      updated: [],
    },
    beneficiario: {
      created: [],
      deleted: [],
      updated: [],
    },
    participantesaccao: {
      created: [],
      deleted: [],
      updated: [],
    },
    beneficiarioiniciativa: {
      created: [],
      deleted: [],
      updated: [],
    },
    monitoriagrupo: {
      created: [],
      deleted: [],
      updated: [],
    },
    ciclo: { created: [], deleted: [], updated: [] },
    poupancabeneficiario: {
      created: [],
      deleted: [],
      updated: [],
    },
    accao: {
      created: [],
      deleted: [],
      updated: [],
    },
    planoaccao: {
      created: [],
      deleted: [],
      updated: [],
    },
    reporteplanoaccao: {
      created: [],
      deleted: [],
      updated: [],
    },
    visitamonitoria: {
      created: [],
      deleted: [],
      updated: [],
    },
    grupopoupanca: {
      created: [],
      deleted: [],
      updated: [],
    },
    monitoriapoupanca: {
      created: [],
      deleted: [],
      updated: [],
    },
  },
};
const mockedRequest = {
  timestamp: Date.now(),
  changes: {
    iniciativa: {
      created: db.iniciativa.getAll(),
      deleted: [],
      updated: [],
    },
    Localizacao: {
      created: location,
      deleted: [],
      updated: [],
    },
    users: {
      created: db.user.getAll(),
      deleted: [],
      updated: [],
    },
    issues: {
      created: db.issues.getAll(),
      deleted: [],
      updated: [],
    },
    time_entries: {
      created: db.time_entries.getAll(),
      deleted: [],
      updated: [],
    },
    projects: {
      created: db.projects.getAll(),
      deleted: [],
      updated: [],
    },
    tipoaccao: {
      created: actionTypes,
      deleted: [],
      updated: [],
    },
    beneficiario: {
      created: db.beneficiario.getAll(),
      deleted: [],
      updated: [],
    },
    participantesaccao: {
      created: [],
      deleted: [],
      updated: [],
    },
    beneficiarioiniciativa: {
      created: db.beneficiario_iniciativa.getAll(),
      deleted: [],
      updated: [],
    },
    monitoriagrupo: {
      created: db.monitoriagrupo.getAll(),
      deleted: [],
      updated: [],
    },
    ciclo: { created: db.ciclo.getAll(), deleted: [], updated: [] },
    poupancabeneficiario: {
      created: db.poupancabeneficiario.getAll(),
      deleted: [],
      updated: [],
    },
    accao: {
      created: [],
      deleted: [],
      updated: [],
    },
    planoaccao: {
      created: db.planoaccao.getAll(),
      deleted: [],
      updated: [],
    },
    reporteplanoaccao: {
      created: db.reporteplanoaccao.getAll(),
      deleted: [],
      updated: [],
    },
    visitamonitoria: {
      created: db.visitamonitoria.getAll(),
      deleted: [],
      updated: [],
    },
    grupopoupanca: {
      created: db.savingGroup.getAll(),
      deleted: [],
      updated: [],
    },
    monitoriapoupanca: {
      created: [],
      deleted: [],
      updated: [],
    },
  },
};

export const push = (
  req: Express.Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json();
};
