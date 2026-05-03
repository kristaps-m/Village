# Projects and dependencies analysis

This document provides a comprehensive overview of the projects and their dependencies in the context of upgrading to .NETCoreApp,Version=v8.0.

## Table of Contents

- [Executive Summary](#executive-Summary)
  - [Highlevel Metrics](#highlevel-metrics)
  - [Projects Compatibility](#projects-compatibility)
  - [Package Compatibility](#package-compatibility)
  - [API Compatibility](#api-compatibility)
- [Aggregate NuGet packages details](#aggregate-nuget-packages-details)
- [Top API Migration Challenges](#top-api-migration-challenges)
  - [Technologies and Features](#technologies-and-features)
  - [Most Frequent API Issues](#most-frequent-api-issues)
- [Projects Relationship Graph](#projects-relationship-graph)
- [Project Details](#project-details)

  - [Village.Core\Village.Core.csproj](#villagecorevillagecorecsproj)
  - [Village.Data\Village.Data.csproj](#villagedatavillagedatacsproj)
  - [Village.Services\Village.Services.csproj](#villageservicesvillageservicescsproj)
  - [Village\Village.csproj](#villagevillagecsproj)


## Executive Summary

### Highlevel Metrics

| Metric | Count | Status |
| :--- | :---: | :--- |
| Total Projects | 4 | 0 require upgrade |
| Total NuGet Packages | 13 | All compatible |
| Total Code Files | 48 |  |
| Total Code Files with Incidents | 0 |  |
| Total Lines of Code | 3080 |  |
| Total Number of Issues | 0 |  |
| Estimated LOC to modify | 0+ | at least 0,0% of codebase |

### Projects Compatibility

| Project | Target Framework | Difficulty | Package Issues | API Issues | Est. LOC Impact | Description |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| [Village.Core\Village.Core.csproj](#villagecorevillagecorecsproj) | net8.0 | ✅ None | 0 | 0 |  | ClassLibrary, Sdk Style = True |
| [Village.Data\Village.Data.csproj](#villagedatavillagedatacsproj) | net8.0 | ✅ None | 0 | 0 |  | ClassLibrary, Sdk Style = True |
| [Village.Services\Village.Services.csproj](#villageservicesvillageservicescsproj) | net8.0 | ✅ None | 0 | 0 |  | ClassLibrary, Sdk Style = True |
| [Village\Village.csproj](#villagevillagecsproj) | net8.0 | ✅ None | 0 | 0 |  | AspNetCore, Sdk Style = True |

### Package Compatibility

| Status | Count | Percentage |
| :--- | :---: | :---: |
| ✅ Compatible | 13 | 100,0% |
| ⚠️ Incompatible | 0 | 0,0% |
| 🔄 Upgrade Recommended | 0 | 0,0% |
| ***Total NuGet Packages*** | ***13*** | ***100%*** |

### API Compatibility

| Category | Count | Impact |
| :--- | :---: | :--- |
| 🔴 Binary Incompatible | 0 | High - Require code changes |
| 🟡 Source Incompatible | 0 | Medium - Needs re-compilation and potential conflicting API error fixing |
| 🔵 Behavioral change | 0 | Low - Behavioral changes that may require testing at runtime |
| ✅ Compatible | 0 |  |
| ***Total APIs Analyzed*** | ***0*** |  |

## Aggregate NuGet packages details

| Package | Current Version | Suggested Version | Projects | Description |
| :--- | :---: | :---: | :--- | :--- |
| AutoMapper | 12.0.1 |  | [Village.csproj](#villagevillagecsproj) | ✅Compatible |
| Microsoft.AspNet.Mvc | 5.2.9 |  | [Village.Services.csproj](#villageservicesvillageservicescsproj) | ✅Compatible |
| Microsoft.AspNetCore.Authentication.JwtBearer | 6.0.0 |  | [Village.csproj](#villagevillagecsproj) | ✅Compatible |
| Microsoft.AspNetCore.Mvc.Abstractions | 2.2.0 |  | [Village.Core.csproj](#villagecorevillagecorecsproj)<br/>[Village.Services.csproj](#villageservicesvillageservicescsproj) | ✅Compatible |
| Microsoft.AspNetCore.Mvc.Core | 2.2.5 |  | [Village.Services.csproj](#villageservicesvillageservicescsproj) | ✅Compatible |
| Microsoft.EntityFrameworkCore | 8.0.0 |  | [Village.Data.csproj](#villagedatavillagedatacsproj) | ✅Compatible |
| Microsoft.EntityFrameworkCore.Design | 6.0.14 |  | [Village.csproj](#villagevillagecsproj) | ✅Compatible |
| Microsoft.EntityFrameworkCore.SqlServer | 8.0.0 |  | [Village.Data.csproj](#villagedatavillagedatacsproj) | ✅Compatible |
| Microsoft.EntityFrameworkCore.Tools | 8.0.0 |  | [Village.Data.csproj](#villagedatavillagedatacsproj) | ✅Compatible |
| Microsoft.IdentityModel.Tokens | 6.14.1 |  | [Village.csproj](#villagevillagecsproj) | ✅Compatible |
| System.IdentityModel.Tokens.Jwt | 6.14.1 |  | [Village.csproj](#villagevillagecsproj) | ✅Compatible |
| Swashbuckle.AspNetCore | 6.2.3 |  | [Village.csproj](#villagevillagecsproj) | ✅Compatible |
| Swashbuckle.AspNetCore.Filters | 7.0.2 |  | [Village.csproj](#villagevillagecsproj) | ✅Compatible |

## Top API Migration Challenges

### Technologies and Features

| Technology | Issues | Percentage | Migration Path |
| :--- | :---: | :---: | :--- |

### Most Frequent API Issues

| API | Count | Percentage | Category |
| :--- | :---: | :---: | :--- |

## Projects Relationship Graph

Legend:
📦 SDK-style project
⚙️ Classic project

```mermaid
flowchart LR
    P1["<b>📦&nbsp;Village.csproj</b><br/><small>net8.0</small>"]
    P2["<b>📦&nbsp;Village.Core.csproj</b><br/><small>net8.0</small>"]
    P3["<b>📦&nbsp;Village.Services.csproj</b><br/><small>net8.0</small>"]
    P4["<b>📦&nbsp;Village.Data.csproj</b><br/><small>net8.0</small>"]
    P1 --> P3
    P1 --> P2
    P1 --> P4
    P3 --> P4
    P4 --> P2
    click P1 "#villagevillagecsproj"
    click P2 "#villagecorevillagecorecsproj"
    click P3 "#villageservicesvillageservicescsproj"
    click P4 "#villagedatavillagedatacsproj"

```

## Project Details

<a id="villagecorevillagecorecsproj"></a>
### Village.Core\Village.Core.csproj

#### Project Info

- **Current Target Framework:** net8.0✅
- **SDK-style**: True
- **Project Kind:** ClassLibrary
- **Dependencies**: 0
- **Dependants**: 2
- **Number of Files**: 23
- **Lines of Code**: 302
- **Estimated LOC to modify**: 0+ (at least 0,0% of the project)

#### Dependency Graph

Legend:
📦 SDK-style project
⚙️ Classic project

```mermaid
flowchart TB
    subgraph upstream["Dependants (2)"]
        P1["<b>📦&nbsp;Village.csproj</b><br/><small>net8.0</small>"]
        P4["<b>📦&nbsp;Village.Data.csproj</b><br/><small>net8.0</small>"]
        click P1 "#villagevillagecsproj"
        click P4 "#villagedatavillagedatacsproj"
    end
    subgraph current["Village.Core.csproj"]
        MAIN["<b>📦&nbsp;Village.Core.csproj</b><br/><small>net8.0</small>"]
        click MAIN "#villagecorevillagecorecsproj"
    end
    P1 --> MAIN
    P4 --> MAIN

```

### API Compatibility

| Category | Count | Impact |
| :--- | :---: | :--- |
| 🔴 Binary Incompatible | 0 | High - Require code changes |
| 🟡 Source Incompatible | 0 | Medium - Needs re-compilation and potential conflicting API error fixing |
| 🔵 Behavioral change | 0 | Low - Behavioral changes that may require testing at runtime |
| ✅ Compatible | 0 |  |
| ***Total APIs Analyzed*** | ***0*** |  |

<a id="villagedatavillagedatacsproj"></a>
### Village.Data\Village.Data.csproj

#### Project Info

- **Current Target Framework:** net8.0✅
- **SDK-style**: True
- **Project Kind:** ClassLibrary
- **Dependencies**: 1
- **Dependants**: 2
- **Number of Files**: 7
- **Lines of Code**: 1562
- **Estimated LOC to modify**: 0+ (at least 0,0% of the project)

#### Dependency Graph

Legend:
📦 SDK-style project
⚙️ Classic project

```mermaid
flowchart TB
    subgraph upstream["Dependants (2)"]
        P1["<b>📦&nbsp;Village.csproj</b><br/><small>net8.0</small>"]
        P3["<b>📦&nbsp;Village.Services.csproj</b><br/><small>net8.0</small>"]
        click P1 "#villagevillagecsproj"
        click P3 "#villageservicesvillageservicescsproj"
    end
    subgraph current["Village.Data.csproj"]
        MAIN["<b>📦&nbsp;Village.Data.csproj</b><br/><small>net8.0</small>"]
        click MAIN "#villagedatavillagedatacsproj"
    end
    subgraph downstream["Dependencies (1"]
        P2["<b>📦&nbsp;Village.Core.csproj</b><br/><small>net8.0</small>"]
        click P2 "#villagecorevillagecorecsproj"
    end
    P1 --> MAIN
    P3 --> MAIN
    MAIN --> P2

```

### API Compatibility

| Category | Count | Impact |
| :--- | :---: | :--- |
| 🔴 Binary Incompatible | 0 | High - Require code changes |
| 🟡 Source Incompatible | 0 | Medium - Needs re-compilation and potential conflicting API error fixing |
| 🔵 Behavioral change | 0 | Low - Behavioral changes that may require testing at runtime |
| ✅ Compatible | 0 |  |
| ***Total APIs Analyzed*** | ***0*** |  |

<a id="villageservicesvillageservicescsproj"></a>
### Village.Services\Village.Services.csproj

#### Project Info

- **Current Target Framework:** net8.0✅
- **SDK-style**: True
- **Project Kind:** ClassLibrary
- **Dependencies**: 1
- **Dependants**: 1
- **Number of Files**: 9
- **Lines of Code**: 408
- **Estimated LOC to modify**: 0+ (at least 0,0% of the project)

#### Dependency Graph

Legend:
📦 SDK-style project
⚙️ Classic project

```mermaid
flowchart TB
    subgraph upstream["Dependants (1)"]
        P1["<b>📦&nbsp;Village.csproj</b><br/><small>net8.0</small>"]
        click P1 "#villagevillagecsproj"
    end
    subgraph current["Village.Services.csproj"]
        MAIN["<b>📦&nbsp;Village.Services.csproj</b><br/><small>net8.0</small>"]
        click MAIN "#villageservicesvillageservicescsproj"
    end
    subgraph downstream["Dependencies (1"]
        P4["<b>📦&nbsp;Village.Data.csproj</b><br/><small>net8.0</small>"]
        click P4 "#villagedatavillagedatacsproj"
    end
    P1 --> MAIN
    MAIN --> P4

```

### API Compatibility

| Category | Count | Impact |
| :--- | :---: | :--- |
| 🔴 Binary Incompatible | 0 | High - Require code changes |
| 🟡 Source Incompatible | 0 | Medium - Needs re-compilation and potential conflicting API error fixing |
| 🔵 Behavioral change | 0 | Low - Behavioral changes that may require testing at runtime |
| ✅ Compatible | 0 |  |
| ***Total APIs Analyzed*** | ***0*** |  |

<a id="villagevillagecsproj"></a>
### Village\Village.csproj

#### Project Info

- **Current Target Framework:** net8.0✅
- **SDK-style**: True
- **Project Kind:** AspNetCore
- **Dependencies**: 3
- **Dependants**: 0
- **Number of Files**: 11
- **Lines of Code**: 808
- **Estimated LOC to modify**: 0+ (at least 0,0% of the project)

#### Dependency Graph

Legend:
📦 SDK-style project
⚙️ Classic project

```mermaid
flowchart TB
    subgraph current["Village.csproj"]
        MAIN["<b>📦&nbsp;Village.csproj</b><br/><small>net8.0</small>"]
        click MAIN "#villagevillagecsproj"
    end
    subgraph downstream["Dependencies (3"]
        P3["<b>📦&nbsp;Village.Services.csproj</b><br/><small>net8.0</small>"]
        P2["<b>📦&nbsp;Village.Core.csproj</b><br/><small>net8.0</small>"]
        P4["<b>📦&nbsp;Village.Data.csproj</b><br/><small>net8.0</small>"]
        click P3 "#villageservicesvillageservicescsproj"
        click P2 "#villagecorevillagecorecsproj"
        click P4 "#villagedatavillagedatacsproj"
    end
    MAIN --> P3
    MAIN --> P2
    MAIN --> P4

```

### API Compatibility

| Category | Count | Impact |
| :--- | :---: | :--- |
| 🔴 Binary Incompatible | 0 | High - Require code changes |
| 🟡 Source Incompatible | 0 | Medium - Needs re-compilation and potential conflicting API error fixing |
| 🔵 Behavioral change | 0 | Low - Behavioral changes that may require testing at runtime |
| ✅ Compatible | 0 |  |
| ***Total APIs Analyzed*** | ***0*** |  |

